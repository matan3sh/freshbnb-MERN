const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
  rate: { type: Number, required: true },
  rental: { type: Schema.Types.ObjectId, ref: 'Rental', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Review', reviewSchema);
