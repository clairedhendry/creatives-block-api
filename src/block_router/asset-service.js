const cloudinary = require('cloudinary').v2;
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = require('../../config')

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET,
});

const AssetService = {
 
    uploadAsset(block_file, category_id) {
        cloudinary.uploader.upload(block_file, 
         {  folder: category_id,
            resource_type: 'auto' },
          function(error, result) {console.log(result, error); });
    }

}

module.exports = { AssetService }