const router = require('express').Router()
const itemRoutes = require('./items')
const storeRoutes = require('./store')
const path = require('path')

// API item routes
router.use('/api/items', itemRoutes)

// API store routes
router.use('/api/store', storeRoutes)

// Send client app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router