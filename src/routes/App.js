import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../components/Login';
import UserProfile from '../components/UserProfile';
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Login} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/profile' component={UserProfile} />
  </BrowserRouter>
);

export default App;
