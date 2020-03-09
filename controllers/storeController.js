const Store = require('../models/Store')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    findAll: function(req, res) {
        Store.find(req.query)
            .then(stores => res.json(stores))
            .catch(err => res.status(422).json(err))
    },
    create: async function(req, res) {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            })
        }

        const { name, password } = req.body

        try {

            let _store = await Store.findOne({ name })

            if (_store) {
                return res.status(400).json({
                    message : 'Store already registered. Please Login.'
                })
            }

            _store = new Store({
                name,
                password
            })

            let salt = await bcrypt.genSalt(10)
            _store.password = await bcrypt.hash(password, salt)

            Store.create(_store)
                .then(newStore => res.json(newStore))
                .catch(err => res.status(422).json(err))
        
        } catch (e) {
            res.status(500).send(`Error while saving store`)
        }
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
    },
    login: async function(req, res) {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(422).json({
                errors : errors.array()
            })
        }

        const { name, password } = req.body
        
        try {
            let _store = await Store.findOne({ name })

            if (!_store) {
                return res.status(404).json({
                    message: 'Store does not exists'
                })
            }

            const isMatch = await bcrypt.compare(password, _store.password)

            if(!isMatch) {
                return res.status(400).json({
                    message: 'Wrong password'
                })
            }

            const payload = {
                store: {
                    id: _store._id
                }
            }

            jwt.sign(
                payload,
                'secret',
                {
                    expiresIn: 3600
                },
                (err, token) => {
                    if (err) throw err
                    res.status(200).json({
                        token
                    })
                }
            )

        } catch (e) {
            res.status(500).json({
                message: 'Server error' + e
            })
        }
    }
}