function requireAPIToken(req, res, next) {
    const APItoken = req.get('API_TOKEN') || ''

    let basicToken
    if(!APItoken.toLowerCase().startsWith('bearer ')) {
        return res.status(401).json({error: 'Missing API token'})
    } else {
        basicToken = APItoken.slice('bearer '.length, APItoken.length)
    }

    if(!basicToken) {
        return res.status(401).json({ error: 'Unauthorized request'})
    }
}

module.exports = { requireAPIToken }