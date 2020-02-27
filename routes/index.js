const router = require('express').Router()
const itemRoutes = require('./items')
const path = require('path')

// API routes
router.use('/api/items', itemRoutes)

// Send client app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router