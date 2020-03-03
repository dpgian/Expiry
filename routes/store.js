const router = require('express').Router()
const storeController = require('../controllers/storeController')

const {check} = require('express-validator')

router  
    .route('/')
    .get(storeController.findAll)
    .post([
        check('name', 'Please enter a valid username')
        .not()
        .isEmpty()
        ,
        check('password', 'Please enter a valid password')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/)
    ], storeController.create)

router  
    .route('/:id')
    .put(storeController.update)
    .delete(storeController.delete)

router
    .route('/login')
    .post([
        check('name', 'Please enter a valid username')
        .not()
        .isEmpty()
        ,
        check('password', 'Please enter a valid password')
        .isLength({ min: 6 })
    ], storeController.login)

module.exports = router