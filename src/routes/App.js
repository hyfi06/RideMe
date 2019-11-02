import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../components/Login';
import Map from '../components/Map';
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/map' component={Map} />
        <Route exact path='/' component={Login} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
