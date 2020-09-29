import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { registerUser } from 'services/authServices';

import { RegisterForm } from 'components/forms';

const Register = () => {
  const history = useHistory();

  const onRegisterUser = (userData) => {
    registerUser(userData)
      .then(() => history.push('/login'))
      .catch((errors) => {
        errors.map((error) => toast.error(error.detail));
      });
  };

  return (
    <div className='auth__container'>
      <div className='auth'>
        <div className='auth__header'>
          <p>Register</p>
        </div>
        <div className='auth__body'>
          <RegisterForm onSubmit={onRegisterUser} />
        </div>
      </div>
    </div>
  );
};

export default Register;
