import React from 'react';
import { Link } from 'react-router-dom';
import Vertical from '../layouts/Vertical';
import User from '../components/User';
import GoogleApiWrapper from '../components/HomeMap';
import Origin from '../components/Origin';
import Destiny from '../components/Destiny';

const Ride = () => (
  <div className='verticalContent'>
    <Vertical>
      <User />
      <Origin />
      <Destiny />
      <Link to='/route'>
        <button className='hero__right-button' type='button'>
          Solicitar ride
        </button>
      </Link>
    </Vertical>
    <GoogleApiWrapper />
  </div>
);

export default Ride;
