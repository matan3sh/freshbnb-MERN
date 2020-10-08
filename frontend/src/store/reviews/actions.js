import reviewsService from 'services/reviewsService';

export const getReviews = (rentalId) => async (dispatch) => {
  try {
    const reviews = await reviewsService.getByRental(rentalId);
    dispatch({ type: 'SET_REVIEWS', payload: reviews });
  } catch (error) {
    console.log(error);
  }
};
