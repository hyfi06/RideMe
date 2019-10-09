import React from 'react';
import logo from '../assets/static/taxi.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <img className='header_logo' src={logo} alt='Logo-RideMe' />
    <h1 className='header_name'>Ride Me</h1>
  </header>
);

export default Header;
