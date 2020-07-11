const express = require('express');
const path = require('path')
const FeedbackService = require('./feedback_service');
const { requireAuth } = require('../middleware/basic-auth');

const FeedbackRouter = express.Router();
const jsonParser = express.json();

FeedbackRouter
    .route('/:block_id')
    .all((req, res, next) => {
        FeedbackService.getBlockFeedbackById(
        req.app.get('db'),
        req.params.block_id
        )
    .then(feedback => {
        if(!feedback) {
            return res.status(404).json({
                error: {message: `There is no feedback for this block yet.`}
            })
        }
        res.feedback = feedback
        next()
    })
    .catch(next)
    })
    .get((req, res, next) => {
        res.json(res.feedback)
    })

module.exports = FeedbackRouter