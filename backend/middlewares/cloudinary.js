const cloudinary = require('cloudinary').v2;
const config = require('config');

const cloud_name = config.get('CLOUDINARY_NAME');
const api_key = config.get('CLOUDINARY_KEY');
const api_secret = config.get('CLOUDINARY_SECRET');

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

exports.cloudUpload = (file) => cloudinary.uploader.upload(file);
