import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../components/Login';
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Route exact path='/login' component={Login} />
    <Route exact path='/' component={Login} />
  </BrowserRouter>
);

export default App;
