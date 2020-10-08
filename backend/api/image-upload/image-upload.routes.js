const express = require('express');
const router = express.Router();

const CloudinaryImage = require('../../models/image');

const auth = require('../../middlewares/auth');
const { dataUri } = require('../../middlewares/dataUri');
const { cloudUpload } = require('../../middlewares/cloudinary');
const upload = require('../../middlewares/multer');
const singleUpload = upload.single('image');

const singleUploadCtrl = (req, res, next) => {
  singleUpload(req, res, (error) => {
    if (error) {
      return res.sendApiError({
        title: 'Upload Error',
        detail: error.message,
      });
    }
    next();
  });
};

router.post('', auth, singleUploadCtrl, async (req, res) => {
  try {
    if (!req.file) throw new Error('Image is not presented!');
    const file64 = dataUri(req.file);
    const result = await cloudUpload(file64.content);
    const cImage = new CloudinaryImage({
      url: result.secure_url,
      cloudinaryId: result.public_id,
    });
    const savedImage = await cImage.save();
    return res.json({ _id: savedImage.id, url: savedImage.url });
  } catch (error) {
    return res.sendApiError({
      title: 'Upload Error',
      detail: error.message,
    });
  }
});

module.exports = router;
