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

  const onRender = () => {
    if (myBookings === null) return <Spinner />;
    else if (!myBookings?.length)
      return <h1 className='no-rentals'>There Is No Bookings</h1>;
  };

  return (
    <>
      <ManageNavigation />
      <h2 className='manage__title'>My Bookings</h2>
      <div className='MyBookingsItem__container'>
        {myBookings?.map((booking) => (
          <MyBookingsItem key={booking._id} booking={booking} />
        ))}
        {onRender()}
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
