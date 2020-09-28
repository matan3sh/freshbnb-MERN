import React from 'react';

const Input = ({ type, name, value, placeholder, onChange }) => (
  <div className='input'>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default Input;
