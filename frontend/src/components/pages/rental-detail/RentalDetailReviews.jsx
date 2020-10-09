import React from 'react';
import { connect } from 'react-redux';

import RentalDetailReviewsItem from './RentalDetailReviewsItem';

const RentalDetailReviews = ({ reviews }) => {
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

export default connect(mapStateToProps, null)(RentalDetailReviews);
