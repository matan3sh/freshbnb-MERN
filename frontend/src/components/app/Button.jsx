import React from 'react';

const Button = ({ text, type }) => (
  <button className='button' type={type}>
    {text}
  </button>
);

export default Button;
