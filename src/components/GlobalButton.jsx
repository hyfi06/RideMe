import React from 'react';
import '../assets/styles/components/button.scss';

const GlobalButton = ({ children, typeButton }) => (
  <div className='button-container'>
    <button className='button' type={typeButton}> {children} </button>
  </div>
);

export default GlobalButton;
