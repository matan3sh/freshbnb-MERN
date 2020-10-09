import reviewsService from 'services/reviewsService';

export const getReviews = (rentalId) => async (dispatch) => {
  try {
    const reviews = await reviewsService.getByRental(rentalId);
    dispatch({ type: 'SET_REVIEWS', payload: reviews });
  } catch (error) {
    console.log(error);
  }
};

export const addReview = (review, rate) => async (dispatch) => {
  try {
    const newReview = await reviewsService.add(review);
    dispatch({ type: 'ADD_REVIEW', payload: { review: newReview, rate } });
  } catch (error) {
    console.log(error);
  }
};
