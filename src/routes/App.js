import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../components/Home';
import Login from '../components/Login';
import Maps from '../components/Maps';
import UserProfile from '../components/UserProfile';
import NotFound from '../components/NotFound';
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/map' component={Maps} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={UserProfile} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
