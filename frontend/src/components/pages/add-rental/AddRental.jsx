import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRental } from 'store/rentals/actions';

import { AddRentalForm } from 'components/forms';

const NewRental = ({ addRental }) => {
  const history = useHistory();

  const onAddNewRental = (rentalData) => {
    rentalData.shared = 'true' ? true : false;
    addRental(rentalData)
      .then(() => history.push('/browse'))
      .catch((error) => console.log(error));
  };

  return (
    <div className='addRental__container'>
      <div className='addRental__header'>
        <p>Create New Rental</p>
      </div>
      <div className='addRental__body'>
        <AddRentalForm onSubmit={onAddNewRental} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addRental,
};

export default connect(null, mapDispatchToProps)(NewRental);
