import React from 'react';
import { useHistory } from 'react-router-dom';
import { withAuth } from 'providers/AuthProvider';

import { LoginForm } from 'components/forms';

import { toast } from 'react-toastify';

const Login = ({ auth }) => {
  const history = useHistory();

  const onLoginUser = (userData) => {
    auth
      .login(userData)
      .then((_) => history.push('/'))
      .catch((errors) => {
        errors.map((error) => toast.error(error.detail));
      });
  };

  return (
    <div className='auth__container'>
      <div className='auth'>
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

export default withAuth(Login);
