import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ApartmentIcon, EmojiPeopleIcon } from 'components/icons';

const BottomNav = () => {
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

  return <nav className='navBottom'>{getGuestNav()}</nav>;
};

export default BottomNav;
