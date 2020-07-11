function requireAuth(req, res, next) {
    const authToken = req.get('Authorization') || ''

    if(!authToken.toLowerCase().startsWith('basic ')) {
        return res.status(401).json({error: 'Missing basic token'})
    }

    next()
}

module.exports = { requireAuth }