import React, { useRef, useState } from 'react';

import { StarIcon } from 'components/icons';
import TomMap from 'components/map/TomMap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';

const RentalDetailCard = ({ dailyPrice, star, city, street }) => {
  const [guests, setGuests] = useState('');
  const [startAt, setStartAt] = useState(null);
  const [endAt, setEndAt] = useState(null);
  const dateRef = useRef(null);

  const onReserveRental = () => {
    console.log(guests, 'Reserved');
  };

  const handleApply = (event, { endDate, startDate }) => {
    dateRef.current.value =
      moment(startDate).format('DD/MM/YYYY') +
      ' to ' +
      moment(endDate).format('DD/MM/YYYY');
    setStartAt(startDate);
    setEndAt(endDate);
  };

  const isInvalidDate = (date) => date < moment().add(-1, 'days');

  return (
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
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <TomMap location={{ city, street }} />
      <button
        className='rentalDetail__priceCard-button'
        onClick={onReserveRental}
      >
        Reserve
      </button>
    </div>
  );
};

export default RentalDetailCard;
