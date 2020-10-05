import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar } from '@material-ui/core';
import { LanguageIcon, ExpandMoreIcon } from 'components/icons';

import Dropdown from './Dropdown';
import Search from './Search';

import logo from 'assets/img/logo.png';

const Header = ({ user, isAuth }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='logo' />
      </Link>
      <Search />
      <div className='header__right'>
        {!isAuth && (
          <p>
            <Link to='/login'>
              <span>Login</span>
            </Link>
            /
            <Link to='/register'>
              <span>Register</span>
            </Link>
          </p>
        )}

        <div className='header__right-icons'>
          <LanguageIcon className='header__right-icons-lang' />
          <ExpandMoreIcon className='header__right-icons-plus' />
        </div>
        {isAuth && user && (
          <div
            className='header__username'
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <span>{user.username}</span>
            <Avatar className='header__avatar' />
            {openDropdown && <Dropdown />}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authApp.user,
  isAuth: state.authApp.isAuth,
});

export default connect(mapStateToProps, null)(Header);
