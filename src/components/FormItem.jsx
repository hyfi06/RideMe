import React from 'react';
import '../assets/styles/components/FormItem.scss';

const FormItem = ({ children, htmlFor, name, type, id, placeholder }) => (
  <label className='FormItem__label' htmlFor={htmlFor}>
    {children}
    <input
      className='FormItem__input'
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
    />
  </label>
);

export default FormItem;