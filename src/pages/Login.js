// @flow
import React from 'react';

import LoginForm from '../redux/containers/LoginForm';

import type { ContextRouter } from 'react-router';

const Login = (props: ContextRouter) => (
  <LoginForm {...props}/>
);

export default Login;
