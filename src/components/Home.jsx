import React from 'react';
import homeImg from '../assets/static/home.jpg';
import GlobalButton from './GlobalButton';
import '../assets/styles/components/home.scss';

const Home = () => (
  <section className='home'>
    <img className='home__img' src={homeImg} alt='Person driving' />
    <section className='home__description'>
      <h2>Ride Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse ut commodo urna, vitae convallis risus.
        Etiam tincidunt commodo metus vitae imperdiet.
        In hac habitasse platea dictumst. Sed id erat dolor.
        Phasellus venenatis facilisis sapien ac aliquam.
        Suspendisse dignissim vestibulum maximus.
        Etiam ac sapien sed quam pulvinar vestibulum.
        Cras libero enim, porttitor eu diam nec, imperdiet lacinia nibh.
        Suspendisse a maximus eros, non pulvinar massa.
        Nunc quis est ut nisi finibus mattis a vitae justo.
        Mauris sodales, lectus sed ultrices vestibulum, quam velit faucibus est, ac venenatis sapien libero sed magna.
        Pellentesque eu risus leo.
      </p>
      <GlobalButton type='submit'>
        Sign Up
      </GlobalButton>

    </section>

  </section>
);

export default Home;
