import React, { useRef, useState } from 'react';
import { addBooking } from 'store/bookings/actions';

import DateRangePicker from 'react-bootstrap-daterangepicker';

import RentalModal from './RentalModal';
import { StarIcon } from 'components/icons';
import TomMap from 'components/map/TomMap';

import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

const RentalDetailCard = ({ dailyPrice, star, city, street, rental }) => {
  const [openModal, setOpenModal] = useState(false);
  const [guests, setGuests] = useState('');
  const [startAt, setStartAt] = useState(null);
  const [endAt, setEndAt] = useState(null);
  const [nights, setNights] = useState(0);
  const [price, setPrice] = useState(0);
  const dateRef = useRef(null);

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

  const isInvalidDate = (date) => date < moment().add(-1, 'days');

  const isBookingValid = guests !== '' && startAt && endAt;

  const onOpenModal = () => setOpenModal(true);

  const onCloseModal = () => setOpenModal(false);

  const getFormmatedDate = () => (dateRef.current ? dateRef.current.value : '');

  const getNumberOfGuests = () => (guests === '' ? 0 : guests);

  const reserveRental = () => {
    const bookingData = { startAt, endAt, guests, nights, price, rental };
    addBooking(bookingData);
  };

  return (
    <>
      <div className='rentalDetail__body-right'>
        <div className='rentalDetail__priceCard'>
          <h3>${dailyPrice}/ night</h3>
          <div className='rentalDetail__priceCard-rating'>
            <StarIcon className='rentalDetail__star' />
            <span>{star}</span>
            <span>(186)</span>
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
        <button
          className='rentalDetail__priceCard-button'
          onClick={onOpenModal}
          disabled={!isBookingValid}
        >
          Reserve
        </button>
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

export default RentalDetailCard;
