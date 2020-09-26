import React from 'react';
import RentalDetailAssets from './RentalDetailAssets';

const RentalInfo = ({ description, shared, category, numOfRooms }) => {
  return (
    <div className='rentalDetail__body-left'>
      <p className='rentalDetail__body-description'>{description}</p>
      <small>
        {shared && 'Shared'} {category} with {numOfRooms} <span>rooms</span>
      </small>
      <RentalDetailAssets />
      <hr />
    </div>
  );
};

export default RentalInfo;
