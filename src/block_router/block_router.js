const express = require('express');
const path = require('path')
const BlockService = require('./block_service');
const { requireAuth } = require('../middleware/basic-auth');

const BlockRouter = express.Router();
const jsonParser = express.json();

BlockRouter
    .route('/recent-blocks')
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
    .route('/:category/:id')
    .all(requireAuth)
    .all((req, res, next) => {
        BlockService.getBlockById(
            req.app.get('db'),
            req.params.category,
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

BlockRouter
    .route('/:category')
    .all(requireAuth)
    .post(jsonParser, (req, res, next) => {
        const { user_id, user_name, category_id, block_title, block_file, block_description, optional_details, date_updated } = req.body;
        const newBlock = { user_id, user_name, category_id, block_title,  block_file, block_description, optional_details }

        for(const [key, value] of Object.entries(newBlock)) {
            if(value ==- null) {
                return res.status(400).json({
                    error: {message: `Missing '${key}' in request body`}
                })
            }
        }

        newBlock.date_updated = new Date()

        BlockService.postBlock(
            req.app.get('db'),
            newBlock
        )
        .then(block => {
            res.status(201)
                .location(path.posix.join(req.originalUrl, `/${block.category_id}/${block.id}`))
                .json(block)
        })
        .catch(next)
    })

module.exports = BlockRouter