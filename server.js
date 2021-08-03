const express = require('express')
const app = express()
const db = require('./db')
const pizzaRoutes = require('./routes/pizzaRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(express.json())
const port = process.env.PORT || 4000

app.use('/api/pizzas', pizzaRoutes)
app.use('/api/users', userRoutes)
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port port! ${port}`))