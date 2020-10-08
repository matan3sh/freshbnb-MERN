import React from 'react';
import Rating from '@material-ui/lab/Rating';

const RentalDetailReviewsItem = ({ review }) => {
  return (
    <div className='reviews__card'>
      <h3>{review.user}</h3>
      <Rating
        name='read-only'
        value={review.rate}
        readOnly
        className='reviews__card-icon'
        precision={0.1}
      />
      <h5>{review.createdAt}</h5>
      <p>{review.text}</p>
    </div>
  );
};

export default RentalDetailReviewsItem;
