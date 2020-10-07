import React from 'react';
import { Link } from 'react-router-dom';
import { KeyboardBackspaceIcon } from 'components/icons';

const RentalDetailNavigation = ({ margin }) => {
  return (
    <Link to='/all/browse'>
      <div className={`rentalDetail__back ${margin && margin}`}>
        <KeyboardBackspaceIcon className='rentalDetail__back-icon' />{' '}
        <span>Back to Rentals</span>
      </div>
    </Link>
  );
};

export default RentalDetailNavigation;
