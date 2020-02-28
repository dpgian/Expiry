const mongoose = require('mongoose')
const {parsed: {DBUSER}} = require('dotenv').config()
const {parsed: {DBPASSWORD}} = require('dotenv').config()
const URI = `mongodb+srv://${DBUSER}:${DBPASSWORD}@expy-cluster-n219t.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(process.env.MONGODB_URI || URI, { useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection enstablished')
})

mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error ${err}`)
})