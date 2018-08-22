// @flow
import React, { Component } from 'react';
import { SubmissionError, Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import type { FieldProps } from 'redux-form';
import type { ContextRouter } from 'react-router';
import type { AuthData } from '../../types/auth';

import { login } from '../actions/auth';

import Form from '../../components/forms/Form';
import Input from '../../components/forms/Input';

type Props = {
  login: () => any
} & FieldProps & ContextRouter

class LoginForm extends Component<Props> {

  // TODO:- Fix -> Bind on constructor give flow-typed errors
  submit = (data: AuthData) => {
    return this.props.login(data)
      .then((error) => {
        if (error) {
          throw new SubmissionError({
            _error: error,
          });
        } else {
          this.props.history.push('/news');
        }
      });
  }

  render() {
    const { handleSubmit, submitting, error } = this.props;
    const { pathname } = this.props.location.previous ? this.props.location.previous.from : {};
    debugger;
    return (

      <Form title="Login" handleSubmit={handleSubmit} submit={this.submit}>
        <Field
          label="Username"
          name="username"
          type="text"
          component={Input}
        />
        <Field
          label="Password"
          name="password"
          type="password"
          component={Input}
        />
        <div className={`nvx-space nvx-error nvx-text ${error ? 'visible' : ''}`}>
          <strong>{error}</strong>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button className="nvx-button" disabled={submitting}>Login!</button>
        </div>   
        <div className={`nvx-space nvx-error nvx-text ${pathname ? 'visible' : ''}`}>
          {/**TODO:- format pathname **/}
            Please, login to see <strong>{pathname}</strong>
        </div>
      </Form>
    );
  }
}

// TODO:- figure it out where to put this
// TODO:- change to field-level validation
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } 
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const formOptions = {
  form: "loginForm",
  validate,
};

const hocCreator = compose(reduxForm(formOptions), connect(null, { login }));

export default hocCreator(LoginForm);
