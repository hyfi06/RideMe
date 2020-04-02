import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';
import '../assets/styles/layouts/Vertical.scss';

const Vertical = ({ children }) => (
  <div className='vertical'>
    <div className='vertical__logo'>
      <img className='vertical__logo-img' src={logo} alt='auto-img' />
      <h1 className='vertical__logo-text'>
        Ride
        <span>Me</span>
      </h1>
    </div>
    <div className='vertical__content'>
      {children}
    </div>
    <div className='vertical__logout'>
      <Link className='link' to='/'>Cerrar sesión</Link>
    </div>
  </div>
);

export default Vertical;
