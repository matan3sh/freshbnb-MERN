import React, { useState } from 'react';
import RentalDetailReviews from './RentalDetailReviews';
import { FaceIcon } from 'components/icons';
import RentalDetailAssets from './RentalDetailAssets';
import RentalDetailAddReview from './RentalDetailAddReview';

const RentalInfo = ({
  description,
  shared,
  category,
  numOfRooms,
  owner,
  rental,
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

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
        <button onClick={onOpen}>Add Review</button>
      </div>
      <RentalDetailAddReview
        onCloseModal={onClose}
        open={open}
        rental={rental}
      />
      <RentalDetailReviews />
    </div>
  );
};

export default RentalInfo;
