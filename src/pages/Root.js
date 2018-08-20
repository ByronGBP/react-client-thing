// @flow
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Login from './Login';

const Root = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Root;
