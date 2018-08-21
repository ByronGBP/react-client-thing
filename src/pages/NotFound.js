// @flow
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const NotFound = () => (
  <Redirect to="/login" />
);

export default NotFound;