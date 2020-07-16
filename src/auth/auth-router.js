const express = require('express');
const AuthService = require('./auth-service')

const AuthRouter = express.Router();
const jsonParser = express.json();

AuthRouter
    .post('/login', jsonParser, (req, res, next) => {
        const {username, user_password } = req.body
        const loginUser = {username, user_password}

        for(const [key, value] of Object.entries(loginUser))
            if(value == null) 
                return res.status(400).json({
                    error: `Missing '${key}' in request body`
                })

        AuthService.getUserWithUserName(
            req.app.get('db'),
            loginUser.username
        )
        .then(dbUser => {
            if(!dbUser)
                return res.status(400).json({
                    error: `Incorrect user name or password`,
                })
            
        const sub = dbUser.username
        const payload = { user_id: dbUser.id }
        res.send({
            authToken: AuthService.createJwt(sub, payload)
            })
        })
        .catch(next)
    })


module.exports = AuthRouter