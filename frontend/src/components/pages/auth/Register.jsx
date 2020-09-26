import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Input } from 'components/app';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submmiting');
  };
  return (
    <div className='auth'>
      <div className='auth__header'>
        <p>Register</p>
      </div>
      <div className='auth__body'>
        <form onSubmit={onSubmit} className='login__form'>
          <div className='inputs'>
            <Input
              type='username'
              value={username}
              placeholder='Username'
              onChange={setUsername}
            />
            <Input
              type='email'
              value={email}
              placeholder='Email'
              onChange={setEmail}
            />
            <Input
              type='password'
              value={password}
              placeholder='Password'
              onChange={setPassword}
            />
            <Input
              type='password'
              value={passwordConfirm}
              placeholder='Confirm Password'
              onChange={setPasswordConfirm}
            />
          </div>
          <p>
            Already have account? <Link to='/login'>Login</Link>
          </p>
          <Button text='Continue' type='submit' />
        </form>
      </div>
    </div>
  );
};

export default Register;
