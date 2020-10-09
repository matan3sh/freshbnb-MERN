import React from 'react';
import { StarIcon, FavoriteBorderIcon, RoomIcon } from 'components/icons';

const RentalDetailHeader = ({ title, star, city, street, rate, length }) => {
  return (
    <div className='rentalDetail__header'>
      <div className='rentalDetail_left'>
        <h1>{title}</h1>
        <div className='rentalDetail__subtitle'>
          <StarIcon className='rentalDetail__star' />
          <p>
            <strong>{rate.toFixed(1)}</strong>
            <span>({length})</span>
          </p>
          <span>·</span>
          <span className='rentalDetail__location'>
            <RoomIcon className='browseItem__city-icon' />
            {street}, {city}
          </span>
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
