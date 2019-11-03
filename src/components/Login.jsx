import React from 'react';
import GlobalButton from  '../components/GlobalButton';
import FormItem from '../components/FormItem';
import '../assets/styles/components/Login.scss';

const Login = () => (
  <div className='login-container'>
    <div className='login'>
      <div className='login__head'>
        <h2 className='login__head--name'>Login</h2>
        <p className='login__text'> Please enter your email and password </p>
      </div>

      <form className='login__form' action=''>
        <FormItem
          htmlFor='email'
          name='email'
          type='email'
          id='email'
          placeholder='Email'
        >
          Email
        </FormItem>
        <FormItem
          htmlFor='password'
          name='password'
          type='password'
          id='password'
          placeholder='Password'
        >
          Password
        </FormItem>
        <div className='login__button-container'>
          <GlobalButton type='submit'>Login</GlobalButton>
        </div>
      </form>
    </div>
  </div>
);

export default Login;
