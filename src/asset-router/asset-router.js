const express = require('express');
const path = require('path')
const AssetService = require('./asset-service');
const { requireAuth } = require('../middleware/jwt-auth');


const AssetRouter = express.Router();
const jsonParser = express.json();

AssetRouter
    .route('/upload')
    .all(requireAuth)
    .post(jsonParser, (req, res, next) => {
        res.send('ok')
    
        .catch(next)
    })
AssetRouter
    .route('/:id')
    .all(requireAuth)
    .get((req, res, next) => {
        AssetService.getAssetById(
            req.app.get('db'),
            req.params.id
        )
        .then(asset => {
            if(!asset) {
                return res.status(404).json({
                    error: {message: `Block doesn't exist`}
                })
                
            }
            res.asset = asset
            next()
        })
        .then(asset => {
            AssetService.retrieveAsset(
                asset.url
            )
        })
        .then(asset => {
            res.json(asset)
        })
        .catch(next)
})

module.exports = AssetRouter