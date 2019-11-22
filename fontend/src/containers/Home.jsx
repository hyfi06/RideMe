import React from 'react';
import Vertical from '../layouts/Vertical';
import User from '../components/User';
import HomeOptions from '../components/HomeOptions';
import GoogleApiWrapper from '../components/HomeMap';

const Home = () => (
  <div className='verticalContent'>
    <Vertical>
      <User />
      <HomeOptions />
    </Vertical>
    <GoogleApiWrapper />
  </div>
);

export default Home;
