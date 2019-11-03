import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/containers/Layout.scss';

const Layout = ({ children }) => (
  <div className='Layout'>
    <Header />
    <section className='Layout__container'>
      <section className='Layout__container--content'>
        {children}
      </section>
    </section>
    <Footer />
  </div>
);

export default Layout;
