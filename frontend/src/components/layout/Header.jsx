import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { SearchIcon, LanguageIcon, ExpandMoreIcon } from 'components/icons';
import logo from 'assets/img/logo.png';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='logo' />
      </Link>
      <div className='header__center'>
        <input type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__right'>
        <p>
          <Link to='/login'>
            <span>Login</span>
          </Link>
          /
          <Link to='/register'>
            <span>Register</span>
          </Link>
        </p>
        <div className='header__right-icons'>
          <LanguageIcon className='header__right-icons-lang' />
          <ExpandMoreIcon className='header__right-icons-plus' />
        </div>
        <Avatar className='header__avatar' />
      </div>
    </div>
  );
};

export default Header;
