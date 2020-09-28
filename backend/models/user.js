const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [4, 'Invalid length! Minimum is 4 characters'],
    maxlength: [32, 'Invalid length! Maximum is 32 characters'],
  },
  email: {
    type: String,
    required: true,
    minlength: [4, 'Invalid length! Minimum is 4 characters'],
    maxlength: [32, 'Invalid length! Maximum is 32 characters'],
    lowercase: true,
    unique: true,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: [4, 'Invalid length! Minimum is 4 characters'],
    maxlength: [32, 'Invalid length! Maximum is 32 characters'],
  },
});

module.exports = mongoose.model('User', userSchema);
