const Store = require('../models/Store')

module.exports = {
    findAll: function(req, res) {
        Store.find(req.query)
            .then(stores => res.json(stores))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        Store.create(req.body)
            .then(newStore => req.json(newStore))
            .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        Store.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(store => res.json(store))
            .catch(err => console.log(err))
    },
    delete: function(req, res) {
        Store.findById({_id: req.params.id })
            .then(store => store.remove())
            .catch(err => res.status(422).json(err))
    }
}