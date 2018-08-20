// @flow
import React from 'react';

import Form from '../components/forms/Login';

const Login = () => (
  <Form title="Login" handleSubmit={(fn) => {fn();}}submit={() => {return 'damn';}}>
      HI!
  </Form>
);

export default Login;
