import React from 'react';
import { Link } from 'react-router-dom';

import {
  PersonIcon,
  SettingsApplicationsIcon,
  ExitToAppIcon,
} from 'components/icons';

const Dropdown = () => {
  return (
    <div className='dropdown'>
      <ul>
        <li>
          <Link to='/profile'>
            <PersonIcon /> Profile
          </Link>
        </li>
        <li>
          <Link to='/messages'>
            <SettingsApplicationsIcon />
            Settings
          </Link>
        </li>
        <li>
          <a href='#/' onClick={() => console.log('logout')}>
            <ExitToAppIcon />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
