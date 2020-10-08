const path = require('path');
const Datauri = require('datauri');
const dUri = new Datauri();

exports.dataUri = (file) =>
  dUri.format(path.extname(file.originalname).toString(), file.buffer);
