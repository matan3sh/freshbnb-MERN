import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addReview } from 'store/reviews/actions';
import Rating from '@material-ui/lab/Rating';
import { Modal } from 'react-responsive-modal';
import { Button } from 'components/app';

const RentalDetailAddReview = ({
  open,
  onCloseModal,
  user,
  rental,
  addReview,
  reviews,
}) => {
  // eslint-disable-next-line
  const [name, setName] = useState(user ? user.username : 'Guest');
  const [text, setText] = useState('');
  const [rate, setRate] = useState(1);

  const onSubmit = (event) => {
    event.preventDefault();
    const review = {
      user: name,
      rental: rental._id,
      text,
      rate,
    };
    let rates = reviews?.map((review) => review.rate);
    rates.push(rate);
    let updatedRate =
      rates.reduce((prev, curr) => prev + curr, 0) / rates.length;
    addReview(review, updatedRate);
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
        <h2>Add Review</h2>
      </div>
      <div className='modal__body'>
        <form onSubmit={onSubmit}>
          <div className='add__review-top'>
            <label>Choose Your Rate</label>
            <Rating
              precision={0.1}
              name='rental-rate'
              className='reviews__card-icon'
              value={rate}
              onChange={(event, newValue) => {
                setRate(newValue);
              }}
            />
          </div>
          <div className='inputs'>
            <div className='input'>
              <input type='text' placeholder='Name' value={name} readOnly />
            </div>
            <div className='input'>
              <textarea
                rows='8'
                type='text'
                placeholder='Write your review'
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </div>
          <Button type='submit' text='Submit' />
        </form>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  user: state.authApp.user,
  reviews: state.reviewsApp.reviews,
});

const mapDispatchToProps = {
  addReview,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RentalDetailAddReview);
