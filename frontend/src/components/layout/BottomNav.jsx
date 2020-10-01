import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';

import {
  HomeIcon,
  ApartmentIcon,
  EmojiPeopleIcon,
  WebIcon,
  PersonIcon,
  SettingsApplicationsIcon,
  ExitToAppIcon,
  BusinessIcon,
} from 'components/icons';

const BottomNav = ({ user, isAuth }) => {
  const authService = useAuth();

  const getGuestNav = () => (
    <>
      <NavLink
        to='/'
        exact
        className='navBottom__link'
        activeClassName='navBottom__active'
      >
        <HomeIcon />
        <span className='navBottom__text'>Home</span>
      </NavLink>
      <NavLink
        to='/register'
        className='navBottom__link'
        activeClassName='navBottom__active'
      >
        <ApartmentIcon />
        <span className='navBottom__text'>Become a Host</span>
      </NavLink>
      <NavLink
        to='/login'
        exact
        className='navBottom__link'
        activeClassName='navBottom__active'
      >
        <EmojiPeopleIcon />
        <span className='navBottom__text'>Login</span>
      </NavLink>
    </>
  );

  const getUserNav = () => (
    <>
      {/* <NavLink
        to='/'
        exact
        className='navBottom__link'
        activeClassName='navBottom__active'
      >
        <HomeIcon />
        <span className='navBottom__text'>Home</span>
      </NavLink> */}
      <NavLink
        to='/browse'
        className='navBottom__link'
        activeClassName='navBottom__active'
      >
        <WebIcon />
        <span className='navBottom__text'>Browse</span>
      </NavLink>
      <NavLink
        to='/profile'
        exact
        className='navBottom__link'
        activeClassName='navBottom__active'
      >
        <PersonIcon />
        <span className='navBottom__text'>Profile</span>
      </NavLink>
      <NavLink
        to='/rentals/add'
        exact
        className='navBottom__link'
        activeClassName='navBottom__active'
      >
        <BusinessIcon />
        <span className='navBottom__text'>Add Rental</span>
      </NavLink>
      <NavLink
        to='/manage'
        exact
        className='navBottom__link'
        activeClassName='navBottom__active'
      >
        <SettingsApplicationsIcon />
        <span className='navBottom__text'>Manage</span>
      </NavLink>
      <a
        href='/'
        className='navBottom__link'
        onClick={() => authService.logout()}
      >
        <ExitToAppIcon />
        <span className='navBottom__text'>Logout</span>
      </a>
    </>
  );

  return (
    <nav className='navBottom'>
      {isAuth && user ? getUserNav() : getGuestNav()}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.authApp.user,
  isAuth: state.authApp.isAuth,
});

export default connect(mapStateToProps, null)(BottomNav);
