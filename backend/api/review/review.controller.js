const reviewsService = require('./review.service');

getRentalReviews = async (req, res) =>
  await reviewsService.getByRental(req, res);

addReview = async (req, res) => await reviewsService.add(req, res);

deleteReview = async (req, res) => await reviewsService.remove(req, res);

module.exports = {
  getRentalReviews,
  addReview,
  deleteReview,
};
