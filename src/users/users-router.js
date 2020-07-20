const express = require('express')
const UsersService = require('./users-service')
const path = require('path')
const UsersRouter = express.Router()
const jsonBodyParser = express.json()

UsersRouter
    .post('/', jsonBodyParser, (req, res, next) => {
        const { user_name, user_email, user_password, } = req.body

        for (const field of ['user_name', 'user_email', 'user_password'])
        if (!req.body[field])
            return res.status(400).json({
                error: `Missing '${field}' in request body`
            })

        const passwordError = UsersService.validatePassword(user_password)
        if(passwordError) 
            return res.status(400).json({
                error: passwordError
            })

        UsersService.hasUserWithUserName(
            req.app.get('db'),
            user_name
        ) 
        .then(hasUserWithUserName => {
            if(hasUserWithUserName) 
                return res.status(400).json({ 
                    error: `Username already taken`
                })
                return UsersService.hashPassword(user_password)
                    .then(hashedPassword => {
                        const newUser = {
                            user_name,
                            user_email,
                            user_password: hashedPassword,
                            date_created:'now()'
                        }
                return UsersService.insertUser(
                req.app.get('db'),
                newUser
                )
                .then(user => {
                    res
                        .status(201)
                        .location(path.posix.join(req.originalUrl, `/${user.id}`))
                        .json(UsersService.serializeUser(user))
                })
            })
        
        })
        .catch(next)
            

        
    })

module.exports = UsersRouter