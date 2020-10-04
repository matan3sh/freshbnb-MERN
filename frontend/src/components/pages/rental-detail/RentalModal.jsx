import React from 'react';
import { Modal } from 'react-responsive-modal';

import { RoomIcon } from 'components/icons';

const RentalModal = ({
  open,
  onCloseModal,
  city,
  street,
  getFormmatedDate,
  getNumberOfGuests,
  price,
  reserveRental,
  nights,
  totalPrice,
}) => {
  return (
    <Modal
      focusTrapped={false}
      open={open}
      onClose={() => onCloseModal()}
      center
    >
      <div className='modal__header'>
        <h2>Reserve Summary</h2>
      </div>
      <div className='modal__body'>
        <h3>
          <RoomIcon />
          {city}, {street}
        </h3>
        <h4>
          <em>{nights} </em> Nights /<em> ${price}</em> per Night
        </h4>
        <p>Between {getFormmatedDate()}</p>
        <p>With {getNumberOfGuests()} guests</p>
        <h5>
          Total Price: <span>${totalPrice}</span>
        </h5>
      </div>
      <div className='modal__footer'>
        <button
          className='button'
          type='button'
          onClick={() => reserveRental()}
        >
          Confirm
        </button>
      </div>
    </Modal>
  );
};

export default RentalModal;
