import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Button } from 'components/app';

const RegisterForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='inputs'>
        <div className='input'>
          <input
            ref={register}
            type='text'
            name='username'
            placeholder='Username'
          />
        </div>
        <div className='input'>
          <input ref={register} type='email' name='email' placeholder='Email' />
        </div>
        <div className='input'>
          <input
            ref={register}
            type='password'
            name='password'
            placeholder='Password'
          />
        </div>
        <div className='input'>
          <input
            ref={register}
            type='password'
            name='passwordConfirm'
            placeholder='ConfirmPassword'
          />
        </div>
      </div>
      <p>
        Already have account? <Link to='/login'>Login</Link>
      </p>
      <Button text='Continue' type='submit' />
    </form>
  );
};

export default RegisterForm;
