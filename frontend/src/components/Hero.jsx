import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/static/hero.jpg';
import '../assets/styles/components/Hero.scss';

const Hero = () => (
  <section className='hero'>
    <img className='hero__img' src={heroImg} alt='hero' />
    <article className='hero__right'>
      <h2 className='hero__right-title'>Viaja sin complicaciones</h2>
      <p className='hero__right-text'>
        Descubre una nueva manera de viajar, en RideMe te brindamos seguridad y
        la mayor comodidad en cada viaje.
      </p>
      <Link to='/register'>
        <button className='hero__right-button' type='button'>
          Regístrate y comienza a viajar
        </button>
      </Link>
    </article>
  </section>
);

export default Hero;
