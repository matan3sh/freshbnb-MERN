import React from 'react';

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
    </div>
  );
};

export default RentalInfo;
