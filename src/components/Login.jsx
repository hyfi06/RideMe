import React from 'react';
import '../assets/styles/components/Login.scss';
import logo from '../assets/static/taxi.png';

const Login = () => (
  <div className='login'>
    <div className='login__head'>
      <img className='login__head-logo' src={logo} alt='Logo-RideMe' />
      <h1 className='login__head-name'>Ride Me</h1>
    </div>
    <h2 className='login__description'>Inicia Sesión</h2>
    <span className='login__text'>Por favor, introduce tu email y contraseña.</span>
    <form action=''>
      <label htmlFor='email'>
        email
        <input
          name='email'
          type='email'
          id='email'
          placeholder='email'
        />
      </label>
      <label htmlFor='password'>
        Contraseña
        <input
          name='password'
          type='password'
          id='password'
          placeholder='Contraseña'
        />
      </label>
    </form>
  </div>
);

export default Login;
