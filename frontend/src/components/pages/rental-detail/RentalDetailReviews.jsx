import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getReviews } from 'store/reviews/actions';

import RentalDetailReviewsItem from './RentalDetailReviewsItem';

const RentalDetailReviews = ({ getReviews, rentalId, reviews }) => {
  useEffect(() => {
    getReviews(rentalId);
  }, [getReviews, rentalId]);

  return (
    <div className='reviews__container'>
      {!reviews?.length ? (
        <span className='no-reviews'>Currently There are No Reviews</span>
      ) : (
        <div className='reviews__list'>
          {reviews.map((review) => (
            <RentalDetailReviewsItem key={review._id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviews: state.reviewsApp.reviews,
});

const mapDispatchToProps = {
  getReviews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RentalDetailReviews);
