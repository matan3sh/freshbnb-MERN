import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Input } from 'components/app';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submmiting');
  };

  return (
    <div className='auth'>
      <div className='auth__header'>
        <p>Log in</p>
      </div>
      <div className='auth__body'>
        <form onSubmit={onSubmit} className='login__form'>
          <div className='inputs'>
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
          </div>
          <p>
            You dont have account? <Link to='/register'>Register</Link>{' '}
          </p>
          <Button type='submit' text='Continue' />
        </form>
      </div>
    </div>
  );
};

export default Login;
