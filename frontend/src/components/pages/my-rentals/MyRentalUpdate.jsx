import React from 'react';
import { connect } from 'react-redux';
import { updateMyRental } from 'store/manage/actions';

import { Modal } from 'react-responsive-modal';
import UpdateRentalForm from 'components/forms/UpdateRentalForm';

const MyRentalUpdate = ({ open, onCloseModal, rental, updateMyRental }) => {
  const onUpdateRental = (event, rentalData) => {
    event.preventDefault();
    rentalData.shared = 'true' ? true : false;
    updateMyRental(rentalData, rental._id);
    onCloseModal();
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

const mapDispatchToProps = {
  updateMyRental,
};

export default connect(null, mapDispatchToProps)(MyRentalUpdate);
