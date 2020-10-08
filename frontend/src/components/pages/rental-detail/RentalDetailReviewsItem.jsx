import React from 'react';
import Rating from '@material-ui/lab/Rating';

const RentalDetailReviewsItem = () => {
  return (
    <>
      <div className='reviews__card'>
        <h3>Matan Shaviro</h3>
        <Rating
          name='read-only'
          value={2}
          readOnly
          className='reviews__card-icon'
        />
        <h5>08-10-2020</h5>
        <p>Great!</p>
      </div>
      <div className='reviews__card'>
        <h3>John Doe</h3>
        <Rating
          name='read-only'
          value={2}
          readOnly
          className='reviews__card-icon'
        />

        <h5>08-10-2020</h5>
        <p>Exellent!</p>
      </div>
      <div className='reviews__card'>
        <h3>John Doe</h3>
        <Rating
          name='read-only'
          value={2}
          readOnly
          className='reviews__card-icon'
        />

        <h5>08-10-2020</h5>
        <p>Exellent!</p>
      </div>
      <div className='reviews__card'>
        <h3>John Doe</h3>
        <Rating
          name='read-only'
          value={2}
          readOnly
          className='reviews__card-icon'
        />

        <h5>08-10-2020</h5>
        <p>Exellent!</p>
      </div>
      <div className='reviews__card'>
        <h3>John Doe</h3>
        <Rating
          name='read-only'
          value={2}
          readOnly
          className='reviews__card-icon'
        />

        <h5>08-10-2020</h5>
        <p>Exellent!</p>
      </div>
    </>
  );
};

export default RentalDetailReviewsItem;
