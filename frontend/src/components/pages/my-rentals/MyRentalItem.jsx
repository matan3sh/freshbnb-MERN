import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteMyRental } from 'store/manage/actions';

import { FavoriteBorderIcon, StarIcon, RoomIcon } from 'components/icons';
import MyRentalUpdate from './MyRentalUpdate';

const MyRentalItem = ({ rental, deleteMyRental }) => {
  const [open, setOpen] = useState(false);

  const onDelete = (rentalId) => {
    const canDelete = askForPermission();
    if (!canDelete) return;
    deleteMyRental(rentalId);
  };

  const askForPermission = () =>
    window.confirm('Are you sure you want to delete this rental?');

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
    <>
      <div className='browseItem'>
        <div className='browseItem__head'>
          <img src={rental.image.url} alt='' />
          <div>
            <button onClick={() => onDelete(rental._id)}>Delete</button>
            <button onClick={onOpen} className='accept__btn'>
              Update
            </button>
          </div>
        </div>
        <Link to={`/rentals/${rental._id}`} id='item'>
          <FavoriteBorderIcon className='browseItem__heart' />
          <div className='browseItem__info'>
            <div className='browseItem__infoTop'>
              <p className='browseItem__city'>
                <RoomIcon className='browseItem__city-icon' />
                {rental.street}, {rental.city}{' '}
              </p>

              <h3>{rental.title}</h3>
              <p className='browseItem__category'>
                {rental.shared ? 'Shared ' : ''}
                {rental.category}
              </p>
              <p>____</p>
              <p>{rental.description}</p>
            </div>
            <div className='browseItem__infoBottom'>
              <div className='browseItem__stars'>
                <StarIcon className='browseItem__star' />
                <p>
                  <strong>
                    {rental.star} <span>(185)</span>
                  </strong>
                </p>
              </div>
              <div className='browseItems__price'>
                <h2>
                  <span>{rental.dailyPrice}$</span> / night
                </h2>
                <p>{rental.numOfRooms} Rooms Available</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <MyRentalUpdate open={open} onCloseModal={onClose} rental={rental} />
    </>
  );
};

const mapDispatchToProps = {
  deleteMyRental,
};

export default connect(null, mapDispatchToProps)(MyRentalItem);
