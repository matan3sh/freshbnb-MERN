import React from 'react';

import { LoginForm } from 'components/forms';

const Login = () => {
  const onLoginUser = (userData) => {
    alert(JSON.stringify(userData));
  };

  return (
    <div className='auth__container'>
      <div className='auth '>
        <div className='auth__header'>
          <p>Log in</p>
        </div>
        <div className='auth__body'>
          <LoginForm onSubmit={onLoginUser} />
        </div>
      </div>
    </div>
  );
};

export default Login;
