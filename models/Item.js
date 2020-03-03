const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        requierd: true
    },
    date : {
        type: String,
        required: true
    },
    store : { 
        type: Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    category : {
        type: String
    }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item