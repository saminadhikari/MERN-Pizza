const mongoose = require('mongoose')

var mongoURL = 'mongodb://localhost:27017/mern-pizza'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB connection successful')
})

db.on('error', ()=>{
    console.log('Mongo DB connection failed')
})

module.exports = mongoose