const mongoose = require('mongoose')
const URI = require('../config/index')

mongoose.connect(process.env.MONGODB_URI || URI, { useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection enstablished')
})

mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error ${err}`)
})