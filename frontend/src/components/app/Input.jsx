import React from 'react';

const Input = ({ type, value, placeholder, onChange }) => (
  <div className='input'>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default Input;
