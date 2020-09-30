import React from 'react';
import { StarIcon } from 'components/icons';
import TomMap from 'components/map/TomMap';

const RentalDetailCard = ({ dailyPrice, star, city, street }) => {
  return (
    <div className='rentalDetail__body-right'>
      <div className='rentalDetail__priceCard'>
        <h3>${dailyPrice}/ night</h3>
        <div className='rentalDetail__priceCard-rating'>
          <StarIcon className='rentalDetail__star' />
          <span>{star}</span>
          <span>(186)</span>
        </div>
      </div>
      <TomMap location={{ city, street }} />
      <button className='rentalDetail__priceCard-button'>Reserve</button>
    </div>
  );
};

export default RentalDetailCard;
