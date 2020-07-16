const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv')


function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
    const token = jwt.sign({ user_id: user.id }, secret, {
        subject: user.username,
        algorithm: 'HS256',      
    })
    return `Bearer ${token}`
}