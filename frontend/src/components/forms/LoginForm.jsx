import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { Button } from 'components/app';

// eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Error = ({ children }) => (
  <div className='input__notValid'>{children}</div>
);

const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='inputs'>
        <div className='input'>
          <input
            ref={register({
              required: 'Email is Required',
              pattern: {
                value: EMAIL_PATTERN,
                message: 'Not Valid Email Format',
              },
            })}
            type='text'
            name='email'
            id='email'
            placeholder='Email'
          />
          <ErrorMessage as={<Error />} errors={errors} name='email'>
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>
        <div className='input'>
          <input
            ref={register({
              required: 'Password is Required',
              minLength: {
                value: 6,
                message: 'Password must 6 characters minimum',
              },
            })}
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
          <ErrorMessage as={<Error />} errors={errors} name='password'>
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>
      </div>
      <p>
        Dont have an account? <Link to='/register'>Register</Link>{' '}
      </p>
      <Button type='submit' text='Continue' />
    </form>
  );
};

export default LoginForm;
