import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadRental, clearRental } from 'store/rentals/actions';

import { Spinner } from 'components/shared';

import RentalDetailGallery from './RentalDetailGallery';
import RentalDetailNavigation from './RentalDetailNavigation';
import RentalDetailHeader from './RentalDetailHeader';
import RentalDetailCard from './RentalDetailCard';
import RentalInfo from './RentalInfo';

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
      {rental ? (
        <>
          <RentalDetailNavigation />
          <RentalDetailHeader
            title={rental?.title}
            star={rental?.star}
            city={rental?.city}
            street={rental?.street}
          />
          <RentalDetailGallery
            coverImage={rental?.image}
            images={rental?.images}
          />
          <div className='rentalDetail__body'>
            <RentalInfo
              description={rental?.description}
              category={rental?.category}
              shared={rental?.shared}
              numOfRooms={rental?.numOfRooms}
            />
            <RentalDetailCard
              dailyPrice={rental?.dailyPrice}
              star={rental?.star}
              city={rental?.city}
              street={rental?.street}
              rental={rental?._id}
            />
          </div>
        </>
      ) : (
        <Spinner />
      )}
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
