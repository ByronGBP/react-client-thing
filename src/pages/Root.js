// @flow
import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './Login';
import News from './News';
import SingleNews from './SingleNews';
import NotFound from './NotFound';

import AnonRoute from '../components/routes/AnonRoute';
import AuthRoute from '../components/routes/AuthRoute';
import InitRoute from '../components/routes/InitRoute';

import store from '../redux/index';

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <AuthRoute path="/news" exact component={News} />
        <AuthRoute path="/news/:id" exact component={SingleNews} />
        <AnonRoute path="/login" exact component={Login} />
        <InitRoute component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
