const Review = require('../../models/review');

getByRental = async (req, res) => {
  const { id } = req.params;
  try {
    const reviews = await Review.find({ rental: id });
    return res.json(reviews);
  } catch (error) {
    return res.mongoError(error);
  }
};

add = async (req, res) => {
  const reviewData = req.body;
  try {
    const review = new Review(reviewData);
    const savedReview = await review.save();
    return res.json(savedReview);
  } catch (error) {
    return res.mongoError(error);
  }
};

remove = async (req, res) => {
  const { user } = res.locals;
  const { id } = req.params;
  try {
    const review = await Review.findById(id);
    if (review.user !== user.username) {
      return res.sendApiError({
        title: 'Invalid Action',
        detail: 'Cannot delete other user review!',
      });
    }
    await review.remove();
    return res.json({ message: 'Review Deleted!' });
  } catch (error) {
    return res.mongoError(error);
  }
};

module.exports = {
  add,
  getByRental,
  remove,
};
