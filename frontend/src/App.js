import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Landing from './containers/Landing';
import Login from './containers/Login';
import Register from './containers/Register';
import Ride from './containers/Ride';
import './assets/styles/App.scss';
import RideRoute from './containers/RideRoute';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/ride' component={Ride} />
        <Route exact path='/route' component={RideRoute} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
