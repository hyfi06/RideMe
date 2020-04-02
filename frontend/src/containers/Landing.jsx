import React from 'react';
import Hero from '../components/Hero';
import Horizontal from '../layouts/Horizontal';
import Info from '../components/Info';

const Landing = () => (
  <Horizontal>
    <Hero />
    <Info />
  </Horizontal>
);

export default Landing;
