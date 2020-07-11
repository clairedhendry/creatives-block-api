require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const { CLIENT_ORIGIN } = require('./config')
const BlockRouter = require('../src/block_router/block_router')
const FeedbackRouter = require('../src/feedback_router/feedback_router')

const app = express()

const morganOption = (NODE_ENV === 'production') ? 'tiny' : 'common';

app.use(morgan(morganOption))
app.use(helmet())
// app.use(
//   cors({
//     origin: CLIENT_ORIGIN
//   })
// );
app.use(cors())

app.use('/api/blocks/', BlockRouter);
app.use('/api/feedback/', FeedbackRouter);

app.use(function errorHandler(error, req, res, next) {
     let response
       if (NODE_ENV === 'production') {
         response = { error: { message: 'server error' } }
       } else {
         console.error(error)
         response = { message: error.message, error }
       }
 ;      res.status(500).json(response)
     })

module.exports = app