import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HelloWorld from '../components/HelloWorld';
import Layout from '../components/Layout';
import NotFound from '../components/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={HelloWorld} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
