import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  loadReceivedBookings,
  clearReceivedBookings,
} from 'store/manage/actions';

import ManageNavigation from '../manage/ManageNavigation';
import ReceivedBookingsItem from './ReceivedBookingsItem';
import { Spinner } from 'components/shared';

const ReceivedBookings = ({
  receivedBookings,
  loadReceivedBookings,
  clearReceivedBookings,
}) => {
  useEffect(() => {
    loadReceivedBookings();
    return () => {
      clearReceivedBookings();
    };
  }, [loadReceivedBookings, clearReceivedBookings]);

  const onRender = () => {
    if (receivedBookings === null) return <Spinner />;
    else if (!receivedBookings?.length)
      return <h1 className='no-rentals'>There Is No Bookings</h1>;
  };

  return (
    <>
      <ManageNavigation />
      <h2 className='manage__title'>Pending Bookings</h2>
      <div className='MyBookingsItem__container'>
        {receivedBookings?.map((booking) => (
          <ReceivedBookingsItem key={booking._id} booking={booking} />
        ))}
        {onRender()}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  receivedBookings: state.manageApp.receivedBookings,
});

const mapDispatchToProps = {
  loadReceivedBookings,
  clearReceivedBookings,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReceivedBookings);
