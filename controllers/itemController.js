const Item = require('../models/Item')
const Store = require('../models/Store')

module.exports = {
    findAll: async function(req, res) {
        const store = await Store.findById(req.store.id)
        Item.find({ store })
            //.populate('store')
            .then(items => res.json(items))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
        Item.findById(req.params.id)
            //.populate('store')
            .then(item => res.json(item))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        Item.create(req.body) 
            .then(newItem => res.json(newItem))
            .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        Item.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(item => res.json(item))
            .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        Item.findById({ _id: req.params.id })
            .then(item => item.remove())
            .then(allItems => res.json(allItems))
            .catch(err => res.status(422).json(err))
    }
}