// @flow
import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './Login';
import NotFound from './NotFound';

import store from '../redux/index';

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
