import React from 'react';
import RentalDetailReviews from './RentalDetailReviews';
import { FaceIcon } from 'components/icons';
import RentalDetailAssets from './RentalDetailAssets';

const RentalInfo = ({ description, shared, category, numOfRooms, owner }) => {
  return (
    <div className='rentalDetail__body-left'>
      <div className='rentalDetail__body-top'>
        <div>
          <p className='rentalDetail__body-description'>{description}</p>
          <small>
            {shared && 'Shared'} {category} with {numOfRooms} <span>rooms</span>
          </small>
        </div>
        <p className='rentalDetail__body-host'>
          <FaceIcon /> Host <span>{owner.username}</span>
        </p>
      </div>
      <RentalDetailAssets />
      <hr />
      <div className='reviews__header'>
        <h2>Reviews</h2>
        <button>Add Review</button>
      </div>
      <RentalDetailReviews />
    </div>
  );
};

export default RentalInfo;
