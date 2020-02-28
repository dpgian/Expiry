const router = require('express').Router()
const storeController = require('../controllers/storeController')

router  
    .route('/')
    .get(storeController.findAll)
    .post(storeController.create)

router  
    .route('/:id')
    .put(storeController.update)
    .delete(storeController.delete)

module.exports = router