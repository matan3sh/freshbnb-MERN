import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadMyBookings, clearMyBookings } from 'store/manage/actions';

import ManageNavigation from '../manage/ManageNavigation';
import MyBookingsItem from './MyBookingsItem';
import { Spinner } from 'components/shared';

const MyBookings = ({ myBookings, loadMyBookings, clearMyBookings }) => {
  useEffect(() => {
    loadMyBookings();
    return () => {
      clearMyBookings();
    };
  }, [loadMyBookings, clearMyBookings]);

  return (
    <>
      <ManageNavigation />
      <h2 className='manage__title'>My Bookings</h2>
      <div className='MyBookingsItem__container'>
        {myBookings === null && <Spinner />}
        {myBookings?.map((booking) => (
          <MyBookingsItem key={booking._id} booking={booking} />
        ))}
        {!myBookings?.length && (
          <h1 className='no-rentals'>There Is No Bookings</h1>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  myBookings: state.manageApp.myBookings,
});

const mapDispatchToProps = {
  loadMyBookings,
  clearMyBookings,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBookings);
