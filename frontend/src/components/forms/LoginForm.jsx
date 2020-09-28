import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Button } from 'components/app';

// eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='inputs'>
        <div className='input'>
          <input
            ref={register({ required: true, pattern: EMAIL_PATTERN })}
            type='text'
            name='email'
            id='email'
            placeholder='Email'
          />
          {errors.email && (
            <div className='input__notValid'>
              {errors.email.type === 'required' && 'Email is Required'}
              {errors.email.type === 'pattern' && 'Not Valid Email Format'}
            </div>
          )}
        </div>
        <div className='input'>
          <input
            ref={register({ required: true, minLength: 6 })}
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
          {errors.password && (
            <div className='input__notValid'>
              {errors.password.type === 'required' && 'Password is Required'}
              {errors.password.type === 'minLength' &&
                'Password must 6 characters minimum'}
            </div>
          )}
        </div>
      </div>
      <p>
        You dont have account? <Link to='/register'>Register</Link>{' '}
      </p>
      <Button type='submit' text='Continue' />
    </form>
  );
};

export default LoginForm;
