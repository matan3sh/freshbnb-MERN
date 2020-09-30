import React from 'react';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import moment from 'moment';

import { loginUser } from 'services/authServices';

const { createContext, useContext } = React;
const AuthContext = createContext(null);

const AuthBaseProvider = ({ children, dispatch }) => {
  const checkAuthState = () => {
    const decodedToken = decodeToken(getToken());
    if (decodedToken && moment().isBefore(getExpiration(decodedToken))) {
      dispatch({ type: 'USER_AUTHENTICATED', payload: decodedToken });
    }
  };

  const getExpiration = (decodedToken) => moment.unix(decodedToken.exp);

  const getToken = () => localStorage.getItem('freshbnb_token');

  const decodeToken = (token) => jwt.decode(token);

  const logout = () => {
    localStorage.removeItem('freshbnb_token');
    dispatch({ type: 'USER_LOGOUT' });
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
    logout,
    checkAuthState,
  };

  return (
    <AuthContext.Provider value={authApi}>{children}</AuthContext.Provider>
  );
};

export const AuthProvider = connect()(AuthBaseProvider);

export const useAuth = () => useContext(AuthContext);

export const withAuth = (Component) => (props) => (
  <AuthContext.Consumer>
    {(authApi) => <Component {...props} auth={authApi} />}
  </AuthContext.Consumer>
);
