import React from 'react';
import { useHistory } from 'react-router-dom';

const Manage = () => {
  const history = useHistory();
  return (
    <div className='manage'>
      <div className='manage__navigation'>
        <button onClick={() => history.push('manage/add')}>New Rental</button>
        <button onClick={() => history.push('manage/rentals')}>
          My Rentals
        </button>
        <button onClick={() => history.push('manage/bookings')}>
          My Bookings
        </button>
        <button onClick={() => history.push('/manage/received')}>
          Received Bookings
        </button>
      </div>
    </div>
  );
};

export default Manage;
