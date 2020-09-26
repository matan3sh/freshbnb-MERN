import React from 'react';
import spinner from 'assets/img/spinner.gif';
const Spinner = () => (
  <img src={spinner} alt='Loading...' style={loaderStyle} />
);
const loaderStyle = {
  width: '400px',
  objectFit: 'contain',
  display: 'flex',
  margin: 'auto',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Spinner;
