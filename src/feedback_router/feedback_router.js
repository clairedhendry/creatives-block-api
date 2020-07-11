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
        FeedbackService.getBlockFeedbackById(
            req.app.get('db'),
            req.params.block_id
        )
        .then(feedback => 
            res.json(feedback))
        .catch(next)
    })

    .post(jsonParser, (req, res, next) => {
        const { block_id, feedback, date_provided, userid, flagged } = req.body
        const newFeedback = { block_id, feedback, userid, flagged } 

        for(const [key, value] of Object.entries(newFeedback)) {
            if (value === null) {
                return res.status(400).json({
                    error: {message: `Missing '${key} in request body`}
                })
            }
        }

        newFeedback.date_provided = new Date()

        FeedbackService.postFeedback(
            req.app.get('db'),
            newFeedback
        )
        .then(feedback => {
            res
                .status(201)
                .location(path.posix.join(req.originalUrl, `/${feedback.id}`))
                .json(feedback)
        })
        .catch(next)
    })


module.exports = FeedbackRouter