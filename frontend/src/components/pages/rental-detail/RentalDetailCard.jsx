import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { addBooking, getBookings } from 'store/bookings/actions';

import DateRangePicker from 'react-bootstrap-daterangepicker';
import TomMap from 'components/map/TomMap';

import RentalModal from './RentalModal';
import { StarIcon } from 'components/icons';

import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

const RentalDetailCard = ({
  dailyPrice,
  star,
  city,
  street,
  rental,
  getBookings,
  addBooking,
  bookings,
  user,
  isAuth,
  rate,
  length,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [guests, setGuests] = useState('');
  const [startAt, setStartAt] = useState(null);
  const [endAt, setEndAt] = useState(null);
  const [nights, setNights] = useState(0);
  const [price, setPrice] = useState(0);
  const dateRef = useRef(null);

  useEffect(() => {
    getBookings(rental);
  }, [getBookings, rental]);

  const handleApply = (event, { startDate, endDate }) => {
    dateRef.current.value =
      moment(startDate).format('DD/MM/YYYY') +
      ' to ' +
      moment(endDate).format('DD/MM/YYYY');
    setStartAt(startDate);
    setEndAt(endDate);

    const range = moment.range(startDate, endDate);
    const bookNights = Array.from(range.by('days')).length - 1;
    setNights(bookNights);

    const price = dailyPrice * bookNights;
    setPrice(price);
  };

  const isInvalidDate = (date) => {
    let isBookedOut = false;
    isBookedOut = bookings?.some((booking) =>
      moment.range(booking.startAt, booking.endAt).contains(date)
    );
    return date < moment().add(-1, 'days') || isBookedOut;
  };

  const isBookingValid = guests !== '' && startAt && endAt;

  const onOpenModal = () => setOpenModal(true);

  const onCloseModal = () => setOpenModal(false);

  const getFormmatedDate = () => (dateRef.current ? dateRef.current.value : '');

  const getNumberOfGuests = () => (guests === '' ? 0 : guests);

  const resetData = () => {
    setGuests('');
    dateRef.current.value = '';
    setStartAt(null);
    setEndAt(null);
  };

  const reserveRental = () => {
    const bookingData = { startAt, endAt, guests, nights, price, rental };
    addBooking(bookingData);
    onCloseModal();
    resetData();
  };

  return (
    <>
      <div className='rentalDetail__body-right'>
        <div className='rentalDetail__priceCard'>
          <h3>${dailyPrice}/ night</h3>
          <div className='rentalDetail__priceCard-rating'>
            <StarIcon className='rentalDetail__star' />
            <span>{rate.toFixed(1)}</span>
            <span>({length})</span>
          </div>
        </div>
        <div className='rentalDetail__specs'>
          <DateRangePicker onApply={handleApply} isInvalidDate={isInvalidDate}>
            <input
              id='dates'
              type='text'
              ref={dateRef}
              placeholder='Pick Dates'
            />
          </DateRangePicker>
          <input
            type='number'
            placeholder='Number of Guests'
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
          />
        </div>
        <TomMap location={{ city, street }} />
        {user && isAuth ? (
          <button
            className='rentalDetail__priceCard-button'
            onClick={onOpenModal}
            disabled={!isBookingValid}
          >
            Reserve
          </button>
        ) : (
          <Link to='/login'>
            <button className='rentalDetail__priceCard-button'>
              Login to Book this Place
            </button>
          </Link>
        )}
      </div>
      <RentalModal
        open={openModal}
        onCloseModal={onCloseModal}
        city={city}
        street={street}
        getFormmatedDate={getFormmatedDate}
        getNumberOfGuests={getNumberOfGuests}
        price={dailyPrice}
        reserveRental={reserveRental}
        nights={nights}
        totalPrice={price}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  bookings: state.bookingsApp.bookings,
  user: state.authApp.user,
  isAuth: state.authApp.isAuth,
});

const mapDispatchToProps = {
  getBookings,
  addBooking,
};

export default connect(mapStateToProps, mapDispatchToProps)(RentalDetailCard);
