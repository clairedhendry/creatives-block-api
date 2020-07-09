const express = require('express');
const BlockService = require('./block_service')

const BlockRouter = express.Router();

BlockRouter
    .route('/')
    .get((req, res, next) => {
        BlockService.getAllRecentBlocks(
            req.app.get('db')
        )
    .then(blocks => {
        res.json(blocks)
    })
    .catch(next)
    })


module.exports = BlockRouter