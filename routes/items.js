const router = require('express').Router()
const itemController = require('../controllers/itemController')

const auth = require('../middleware/auth')

router
    .route('/')
    .get(auth, itemController.findAll)
    .post(itemController.create)

router 
    .route('/:id')
    .get(itemController.findById)
    .put(itemController.update)
    .delete(itemController.remove)

module.exports = router