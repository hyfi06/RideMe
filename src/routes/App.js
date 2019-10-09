import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/Login'
import Layout from '../components/Layout';
import NotFound from '../components/NotFound';
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
