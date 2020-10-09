import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteMyBooking } from 'store/manage/actions';

import {
  DateRangeIcon,
  PeopleIcon,
  NightsStayIcon,
  BookIcon,
} from 'components/icons';

import Moment from 'react-moment';
// import moment from 'moment';
// import 'moment/locale/he';
// moment.locale('he');

const MyBookingsItem = ({ booking, deleteMyBooking }) => {
  const onDelete = (bookingId) => {
    const canDelete = askForPermission();
    if (!canDelete) return;
    deleteMyBooking(bookingId);
  };

  const askForPermission = () =>
    window.confirm('Are you sure you want to delete this rental?');

  return (
    <div className='MyBookingsItem'>
      <div className='MyBookingsItem__img'>
        <img src={booking.rental.image.url} alt='' />
        <div>
          <button onClick={() => onDelete(booking._id)}>Cancel</button>
        </div>
      </div>
      <Link to={`/rentals/${booking.rental._id}`}>
        <div className='MyBookingsItem__body'>
          <h2>{booking.rental.title}</h2>
          <div className='MyBookingsItem__body-specs'>
            <div>
              <DateRangeIcon />
              <span>
                <Moment format='L'>{booking.startAt}</Moment>
                <span> to </span>
                <Moment format='L'>{booking.endAt}</Moment>
              </span>
            </div>
            <div>
              <NightsStayIcon /> <span>{booking.nights} Nights</span>
            </div>
            <div>
              <PeopleIcon /> <span>{booking.guests} People</span>
            </div>
            <div>
              <BookIcon />
              <span>
                Booked In <Moment format='ll'>{booking.createdAt}</Moment>
              </span>
            </div>
          </div>
          <p>
            Total Price: <span>${booking.price}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

const mapDispatchToProps = {
  deleteMyBooking,
};

export default connect(null, mapDispatchToProps)(MyBookingsItem);
