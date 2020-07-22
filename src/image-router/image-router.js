const express = require('express')

const imageUpload = require('./image-service')
const { uploadImage, getImages } = require('./image-controller');

const ImageUploadRouter = express.Router();
const ImageRouter = express.Router();

ImageUploadRouter
    .post('/', imageUpload.single('picture'), uploadImage);


ImageRouter
    .get('/', getImages);


module.exports = { ImageUploadRouter, ImageRouter }