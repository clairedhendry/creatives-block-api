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

BlockRouter
    .route('/blocks/:category/:id')
    .all((req, res, next) => {
        BlockRouter.getBlockById(
            req.app.get('db'),
            req.params.id)
    
    .then(block => {
        if(!block) {
            return res.status(404).json({
                error: {message: `Block doesn't exist`}
            })
            
        }
        res.block = block
        next()
    })
    .catch(next)
    })
    .get((req, res, next) => {
        res.json(res.block)
    })

module.exports = BlockRouter