import React from 'react';
import logo from '../assets/static/logo.png';
import '../assets/styles/components/Info.scss';

const Info = () => (
  <section className='info'>
    <h2 className='info__title'>
      Ride
      <span>Me</span>
    </h2>
    <figure className='info__logo'>
      <img className='info__logo-img' src={logo} alt='rideMe-logo' />
    </figure>
  </section>
);

export default Info;
