import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';
import '../assets/styles/components/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Link className='header__logo' to='/'>
        <img className='header__logo-img' src={logo} alt='auto-img' />
        <h1 className='header__logo-text'>
          Ride
          <span>Me</span>
        </h1>
      </Link>
      <ul className='header__nav'>
        <li className='header__nav-item'>
          <Link to='/login'>Inicia sesión</Link>
        </li>
        <li className='header__nav-item'>
          <Link to='/register'>Regístrate</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
