import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/taxi.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <div className='header__logo-container'>
        <img className='header__logo' src={logo} alt='Logo-RideMe' />
        <h1 className='header__name'> Ride Me </h1>
      </div>
    </Link>
    <div className='header__session'>
      <p className='header__session--link'>
        <Link to='/login'>
          Login
        </Link>
      </p>
      <p className='header__session--link'> Sign Up </p>
    </div>
  </header>
);

export default Header;
