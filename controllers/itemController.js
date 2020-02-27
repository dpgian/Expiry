const Item = require('../models/Item')

module.exports = {
    findAll: function(req, res) {
        Item.find(req.query)
            .then(items => res.json(items))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
        Item.findById(req.params.id)
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