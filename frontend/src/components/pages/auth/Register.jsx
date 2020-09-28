import React from 'react';

import { RegisterForm } from 'components/forms';

const Register = () => {
  const onRegisterUser = (userData) => {
    alert(JSON.stringify(userData));
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
