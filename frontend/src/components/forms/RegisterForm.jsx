import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { sameAs } from 'helpers/validators';

import { Button } from 'components/app';

// eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegisterForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors, getValues } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='inputs'>
        <div className='input'>
          <input
            ref={register({ required: true, minLength: 3 })}
            type='text'
            name='username'
            id='username'
            placeholder='Username'
          />
          {errors.username && (
            <div className='input__notValid'>
              {errors.username.type === 'required' && 'Username is Required'}
              {errors.username.type === 'minLength' &&
                'Username must 3 characters minimum'}
            </div>
          )}
        </div>
        <div className='input'>
          <input
            ref={register({ required: true, pattern: EMAIL_PATTERN })}
            type='email'
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
        <div className='input'>
          <input
            ref={register({
              required: true,
              minLength: 6,
              validate: { sameAs: sameAs('password', getValues) },
            })}
            type='password'
            name='passwordConfirm'
            id='passwordConfirm'
            placeholder='ConfirmPassword'
          />
          {errors.passwordConfirm && (
            <div className='input__notValid'>
              {errors.passwordConfirm.type === 'required' &&
                'Password Confirmation is Required'}
              {errors.passwordConfirm.type === 'minLength' &&
                'Password Confirmation must 6 characters minimum'}
              {errors.passwordConfirm.type === 'sameAs' &&
                'Password Confirmation must match with Password'}
            </div>
          )}
        </div>
      </div>
      <p>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
      <Button text='Continue' type='submit' />
    </form>
  );
};

export default RegisterForm;
