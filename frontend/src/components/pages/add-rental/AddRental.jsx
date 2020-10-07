import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRental } from 'store/rentals/actions';
import { AddRentalForm } from 'components/forms';

import ManageNavigation from '../manage/ManageNavigation';

const NewRental = ({ addRental }) => {
  const history = useHistory();

  const onAddNewRental = (rentalData) => {
    rentalData.shared = 'true' ? true : false;
    const {
      title,
      city,
      street,
      category,
      image,
      numOfRooms,
      description,
      shared,
      dailyPrice,
    } = rentalData;
    const images = [
      rentalData.image1,
      rentalData.image2,
      rentalData.image3,
      rentalData.image4,
    ];
    const rentalToAdd = {
      title,
      city,
      street,
      category,
      image,
      images,
      numOfRooms: parseInt(numOfRooms),
      shared,
      description,
      dailyPrice: parseInt(dailyPrice),
    };
    addRental(rentalToAdd);
    history.push('/');
  };

  return (
    <>
      <ManageNavigation />
      <div className='addRental__container'>
        <div className='addRental__header'>
          <p>Create New Rental</p>
        </div>
        <div className='addRental__body'>
          <AddRentalForm onSubmit={onAddNewRental} />
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  addRental,
};

export default connect(null, mapDispatchToProps)(NewRental);
