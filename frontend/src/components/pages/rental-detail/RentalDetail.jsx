import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadRental, clearRental } from 'store/rentals/actions';

import RentalDetailGallery from './RentalDetailGallery';
import RentalDetailAssets from './RentalDetailAssets';
import RentalDetailNavigation from './RentalDetailNavigation';
import RentalDetailHeader from './RentalDetailHeader';
import RentalDetailCard from './RentalDetailCard';

const RentalDetail = ({ match, loadRental, clearRental, rental }) => {
  useEffect(() => {
    const { id } = match.params;
    loadRental(id);
    return () => {
      clearRental();
    };
    // eslint-disable-next-line
  }, [loadRental, clearRental]);

  return (
    <div className='rentalDetail'>
      <RentalDetailNavigation />
      <RentalDetailHeader
        title={rental?.title}
        star={rental?.star}
        city={rental?.city}
      />
      <RentalDetailGallery coverImage={rental?.image} images={rental?.images} />
      <div className='rentalDetail__body'>
        <div className='rentalDetail__body-left'>
          <p className='rentalDetail__body-description'>
            {rental?.description}
          </p>
          <small>
            {rental?.shared && 'Shared'} {rental?.category}
          </small>
          <RentalDetailAssets />
          <hr />
        </div>
        <RentalDetailCard dailyPrice={rental?.dailyPrice} star={rental?.star} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  rental: state.mainApp.rental,
});
const mapDispatchToProps = {
  loadRental,
  clearRental,
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalDetail);
