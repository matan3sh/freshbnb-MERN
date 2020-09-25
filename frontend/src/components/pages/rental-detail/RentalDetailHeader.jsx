import React from 'react';
import { StarIcon, FavoriteBorderIcon } from 'components/icons';

const RentalDetailHeader = ({ title, star, city }) => {
  return (
    <div className='rentalDetail__header'>
      <div className='rentalDetail_left'>
        <h1>{title}</h1>
        <div className='rentalDetail__subtitle'>
          <StarIcon className='rentalDetail__star' />
          <p>
            <strong>{star}</strong>
            <span>(185)</span>
          </p>
          <span>·</span>
          <span className='rentalDetail__location'>{city}</span>
        </div>
      </div>
      <div className='rentalDetail__right'>
        <FavoriteBorderIcon className='rentalDetail__heart' />
        <span>Save</span>
      </div>
    </div>
  );
};

export default RentalDetailHeader;
