import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';

import {
  PersonIcon,
  SettingsApplicationsIcon,
  ExitToAppIcon,
  BusinessIcon,
} from 'components/icons';

const Dropdown = () => {
  const authService = useAuth();

  return (
    <div className='dropdown'>
      <ul>
        <li>
          <Link to='/profile'>
            <PersonIcon /> Profile
          </Link>
        </li>
        <li>
          <Link to='/rentals/add'>
            <BusinessIcon />
            Add Rental
          </Link>
        </li>
        <li>
          <Link to='/manage'>
            <SettingsApplicationsIcon />
            Manage Rentals
          </Link>
        </li>
        <li>
          <a href='/' onClick={() => authService.logout()}>
            <ExitToAppIcon />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
