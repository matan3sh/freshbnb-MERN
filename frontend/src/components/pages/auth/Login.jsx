import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log('Submmiting');
  };

  return (
    <div className='login'>
      <div className='login__header'>
        <p>Log in</p>
      </div>
      <div className='login__body'>
        <form onSubmit={onSubmit} className='login__form'>
          <div className='login__inputs'>
            <div className='login__input'>
              <input
                type='email'
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='login__input'>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <p>
            You dont have account?{' '}
            <Link exact to='/register'>
              Register
            </Link>{' '}
          </p>
          <button type='submit'>Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
