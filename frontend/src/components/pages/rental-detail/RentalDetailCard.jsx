import React from 'react';
import { StarIcon } from 'components/icons';

const RentalDetailCard = ({ dailyPrice, star }) => {
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
      <img
        src='https://cdn.filestackcontent.com/qfzkumr0RE27pdC8tqeH'
        alt=''
        className='rentalDetail__body-map'
      />
      <button className='rentalDetail__priceCard-button'>Reserve</button>
    </div>
  );
};

export default RentalDetailCard;
