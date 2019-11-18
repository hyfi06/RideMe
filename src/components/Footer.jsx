import React from 'react';
import logoPlatzi from '../assets/static/logo-platzi.png';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className='footer '>
    <div className='footer__made'>
      <span role='img' aria-label='heart'>
        Hecho con 💚 para la Escuela de Javascript de
      </span>
      <a
        className='footer__made__link'
        href='https://platzi.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className='footer__made__link-img'
          src={logoPlatzi}
          alt='logo-platzi'
        />
      </a>
    </div>
    <div className='footer__place'>
      <span>Ciudad de México, 2019</span>
    </div>
  </footer>
);

export default Footer;
