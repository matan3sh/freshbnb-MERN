import React from 'react';
import { Link } from 'react-router-dom';

import { KeyboardBackspaceIcon } from 'components/icons';

const ManageNavigation = () => {
  return (
    <Link to='/manage'>
      <div className='rentalDetail__back'>
        <KeyboardBackspaceIcon className='rentalDetail__back-icon' />
        <span>Back to Manage Page</span>
      </div>
    </Link>
  );
};

export default ManageNavigation;
