import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/layouts/Horizontal.scss';

const Horizontal = ({ children }) => (
  <>
    <Header />
    <div className='horizontal__content'>
      {children}
    </div>
    <Footer />
  </>
);

export default Horizontal;
