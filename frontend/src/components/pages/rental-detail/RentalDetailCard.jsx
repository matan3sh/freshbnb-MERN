import React, { useRef, useState } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';

import RentalModal from './RentalModal';
import { StarIcon } from 'components/icons';
import TomMap from 'components/map/TomMap';

const RentalDetailCard = ({ dailyPrice, star, city, street }) => {
  const [openModal, setOpenModal] = useState(false);
  const [guests, setGuests] = useState('');
  const [startAt, setStartAt] = useState(null);
  const [endtAt, setEndAt] = useState(null);
  const dateRef = useRef(null);

  const handleApply = (event, { endDate, startDate }) => {
    dateRef.current.value =
      moment(startDate).format('DD/MM/YYYY') +
      ' to ' +
      moment(endDate).format('DD/MM/YYYY');
    setStartAt(startDate);
    setEndAt(endDate);
  };

  const isInvalidDate = (date) => date < moment().add(-1, 'days');

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const getFormmatedDate = () => (dateRef.current ? dateRef.current.value : '');
  const getNumberOfGuests = () => (guests === '' ? 0 : guests);

  const reserveRental = () => {
    console.log(JSON.stringify({ startAt, endtAt, guests }));
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
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <TomMap location={{ city, street }} />
        <button
          className='rentalDetail__priceCard-button'
          onClick={onOpenModal}
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
      />
    </>
  );
};

export default RentalDetailCard;
