// @flow
import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './Login';
import NotFound from './NotFound';

import AnonRoute from '../components/routes/AnonRoute';
import InitRoute from '../components/routes/InitRoute';

import store from '../redux/index';

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <AnonRoute path="/login" component={Login} />
        <InitRoute component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
