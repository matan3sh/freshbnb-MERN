import React from 'react';
import spinner from 'assets/img/spinner.gif';
const Spinner = () => (
  <img src={spinner} alt='Loading...' style={loaderStyle} />
);
const loaderStyle = {
  width: '100%',
  objectFit: 'contain',
  display: 'flex',
  margin: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Spinner;
