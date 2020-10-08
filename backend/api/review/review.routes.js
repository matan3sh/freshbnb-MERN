const express = require('express');
const {
  getRentalReviews,
  addReview,
  deleteReview,
} = require('./review.controller');

const auth = require('../../middlewares/auth');

const router = express.Router();

router.get('/:id', getRentalReviews);
router.post('/', addReview);
router.delete('/:id', auth, deleteReview);

module.exports = router;
