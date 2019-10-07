import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HelloWorld from '../components/HelloWorld';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={HelloWorld} />
  </BrowserRouter>
);

export default App;
