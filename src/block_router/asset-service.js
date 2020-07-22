const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = require('../../config')

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'app',
    allowedFormats: ['jpg', 'png', 'jpeg'],
});

const AssetService = {
 
    uploadAsset(asset) {
        cloudinary.v2.uploader.upload(asset.file, 
         { public_id: asset.name },
          function(error, result) {console.log(result, error); });
    }

}

module.exports = { AssetService }