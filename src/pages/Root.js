// @flow
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Login from './Login';
import NotFound from './NotFound';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Root;
