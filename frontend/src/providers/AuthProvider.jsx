import React from 'react';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';

import { loginUser } from 'services/authServices';

const { createContext } = React;
const AuthContext = createContext(null);

const AuthBaseProvider = ({ children, dispatch }) => {
  const decodeToken = (token) => {
    return jwt.decode(token);
  };

  const login = (userData) => {
    return loginUser(userData).then((token) => {
      localStorage.setItem('freshbnb_token', token);
      const decodedToken = decodeToken(token);
      dispatch({ type: 'USER_AUTHENTICATED', payload: decodedToken });
      return token;
    });
  };

  const authApi = {
    login,
  };

  return (
    <AuthContext.Provider value={authApi}>{children}</AuthContext.Provider>
  );
};

export const AuthProvider = connect()(AuthBaseProvider);

export const withAuth = (Component) => (props) => (
  <AuthContext.Consumer>
    {(authApi) => <Component {...props} auth={authApi} />}
  </AuthContext.Consumer>
);
