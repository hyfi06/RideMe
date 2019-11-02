import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../components/Login';
import UserProfile from '../components/UserProfile';
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={UserProfile} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
