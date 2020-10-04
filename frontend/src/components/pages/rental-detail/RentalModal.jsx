import React from 'react';
import { Modal } from 'react-responsive-modal';

import { makeReservationID } from 'helpers/functions';
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
          <em>12 </em> Nights /<em> ${price}</em> per Night
        </h4>
        <p>Between {getFormmatedDate()}</p>
        <p>With {getNumberOfGuests()} guests</p>
        <h5>
          Total Price: <span>$200</span>
        </h5>
        <p>
          <span>Reservation ID:</span> {makeReservationID()}
        </p>
      </div>
      <div className='modal__footer'>
        <button
          className='button'
          type='button'
          onClick={() => reserveRental()}
        >
          Confirm
        </button>
        <button className='button cancelButton' type='button'>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default RentalModal;
