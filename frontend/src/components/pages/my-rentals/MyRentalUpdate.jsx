import React from 'react';
import { Modal } from 'react-responsive-modal';
import UpdateRentalForm from 'components/forms/UpdateRentalForm';

const MyRentalUpdate = ({ open, onCloseModal, rental }) => {
  const onUpdateRental = (event, rental) => {
    event.preventDefault();
    console.log(rental);
  };

  return (
    <Modal
      focusTrapped={false}
      open={open}
      onClose={() => onCloseModal()}
      center
    >
      <div className='modal__header'>
        <h2>Update Rental</h2>
      </div>
      <div className='modal__body'>
        <UpdateRentalForm onSubmit={onUpdateRental} rentalToUpdate={rental} />
      </div>
    </Modal>
  );
};

export default MyRentalUpdate;
