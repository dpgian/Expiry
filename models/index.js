const mongoose = require('mongoose')
require('dotenv').config()
//const DBUSER = dotenv.parse(DBUSER)
//const {parsed: {DBUSER}} = require('dotenv').config()
//const {parsed: {DBPASSWORD}} = require('dotenv').config()
const URI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@expy-cluster-n219t.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(process.env.MONGODB_URI || URI, { useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection enstablished')
})

mongoose.connection.on('error', err => {
    console.log('xxxxxxx: '+ DBUSER)
    console.log(`Mongoose connection error ${err}`)
})