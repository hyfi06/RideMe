import React from 'react';
import '../assets/styles/components/UserProfile.scss';
import logo from '../assets/static/taxi.png';

const UserProfile = () => (
  <div className='userProfile'>
    <div className='userProfile__head'>
      <img className='userProfile__head-logo' src={logo} alt='Logo-RideMe' />
      <h1 className='userProfile__head-name'>Ride Me</h1>
    </div>
  </div>
);

export default UserProfile;
