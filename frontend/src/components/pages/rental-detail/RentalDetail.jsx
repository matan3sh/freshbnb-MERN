import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadRental, clearRental } from 'store/rentals/actions';
import { getReviews } from 'store/reviews/actions';

import { Spinner } from 'components/shared';

import RentalDetailGallery from './RentalDetailGallery';
import RentalDetailNavigation from './RentalDetailNavigation';
import RentalDetailHeader from './RentalDetailHeader';
import RentalDetailCard from './RentalDetailCard';
import RentalInfo from './RentalInfo';

const RentalDetail = ({
  match,
  loadRental,
  clearRental,
  rental,
  getReviews,
  reviews,
  rate,
}) => {
  useEffect(() => {
    const { id } = match.params;
    loadRental(id);
    getReviews(id);
    return () => {
      clearRental();
    };
    // eslint-disable-next-line
  }, [loadRental, clearRental, getReviews]);

  return (
    <div className='rentalDetail'>
      {rental ? (
        <>
          <RentalDetailNavigation margin='m-0' />
          <RentalDetailHeader
            title={rental?.title}
            star={rental?.star}
            city={rental?.city}
            street={rental?.street}
            rate={rate}
            length={reviews?.length}
          />
          <RentalDetailGallery
            coverImage={rental?.image.url}
            images={rental?.images}
          />
          <div className='rentalDetail__body'>
            <RentalInfo
              description={rental?.description}
              category={rental?.category}
              shared={rental?.shared}
              numOfRooms={rental?.numOfRooms}
              owner={rental?.owner}
              rental={rental}
            />
            <RentalDetailCard
              dailyPrice={rental?.dailyPrice}
              star={rental?.star}
              city={rental?.city}
              street={rental?.street}
              rental={rental?._id}
              rate={rate}
              length={reviews?.length}
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
  reviews: state.reviewsApp.reviews,
  rate: state.reviewsApp.rate,
});

const mapDispatchToProps = {
  loadRental,
  clearRental,
  getReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalDetail);
