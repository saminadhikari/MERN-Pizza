const Pizza = require("../models/pizzaModel")
const express = require('express')
const router = express.Router()

router.get('/getpizzas', async (req, res) => {
    try {
        const pizza = await Pizza.find({})
        res.status(200).send(pizza)
    }
    catch (err) {
        return res.status(500).json({ message: err })
    }
})

router.post('/addpizza', async(req, res) => {
    const pizza = req.body.pizza

    try {
        const newpizza = new Pizza({
            name: pizza.name,
            image: pizza.image,
            varients: ["small", "medium", "large"],
            description: pizza.description,
            category: pizza.category,
            prices: [pizza.prices]
        })
        await newpizza.save()
        res.status(200).send('Pizza added successfully')
    } catch(error) {
        res.status(400).json({message: err})
    }
    
})

router.post('/getpizzabyid', async(req, res) => {
    const pizzaid = req.body.pizzaid

    try{
        const pizza = await Pizza.find({_id: pizzaid})
        res.send(pizza)
    } catch (err) {
        res.status(500).json({message: err})
    }
})

router.post('/updatepizza', async(req, res) => {
    const editedpizza = req.body
    try {
        await Pizza.findOneAndUpdate({_id: editedpizza._id}, {
            name: editedpizza.name,
            description: editedpizza.description,
            image: editedpizza.image,
            category: editedpizza.category,
            prices: [editedpizza.prices]
        })

        res.status(200).send("Pizza successfully edited")
    }
    catch(err) {
        res.status(400).send({message: err})
    }
})

router.post('/deletepizza', async(req, res) => {
    const pizzaid = req.body.pizzaid
    try {
        await Pizza.findByIdAndRemove(pizzaid)
        res.status(200).send('Pizza removed successfully')
    }
    catch(err) {
        res.status(500).send({message: err})
    }
})

module.exports = router