import React from 'react';
import { Modal } from 'react-responsive-modal';

const RentalDetailAddReview = ({ open, onCloseModal }) => {
  return (
    <Modal
      focusTrapped={false}
      open={open}
      onClose={() => onCloseModal()}
      center
    >
      <div className='modal__header'>
        <h2>Add Review</h2>
      </div>
      <div className='modal__body'>
        <p>Add Review</p>
      </div>
    </Modal>
  );
};

export default RentalDetailAddReview;
