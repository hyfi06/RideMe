import React from 'react';
import photo from '../assets/static/profile.jpg';
import '../assets/styles/components/User.scss';

const User = () => (
  <div className='user'>
    <figure className='user__photo'>
      <img className='user__photo-img' src={photo} alt='User' />
    </figure>
    <span className='user__name'>Luis Flores Álvarez</span>
  </div>
);

export default User;
