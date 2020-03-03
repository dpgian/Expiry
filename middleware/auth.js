const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    const token = req.header('token')

    if (!token) {
        return res.status(400).json({
            message: 'Authentication error'
        })
    }

    try {
        const decoded = jwt.verify(token, 'secret')
        req.store = decoded.store
        next()
    } catch (e) {
        res.status(500).send({
            message: 'Invalid token' + e
        })
    }
}