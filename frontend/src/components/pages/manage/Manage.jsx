import React from 'react';
import { Link } from 'react-router-dom';

const Manage = () => {
  return (
    <div className='manage'>
      <div className='manage__navigation'>
        <button>
          <Link to='manage/add'>New Rental</Link>
        </button>
        <button>
          <Link to='manage/rentals'>My Rentals</Link>
        </button>
        <button>
          <Link to='manage/bookings'>My Bookings</Link>
        </button>
        <button>
          <Link to='/manage/received'>Received Bookings</Link>
        </button>
      </div>
    </div>
  );
};

export default Manage;
