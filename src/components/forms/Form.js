// @flow
import React, { Component } from 'react';

import type { FormProps } from 'redux-form';


type Props = {
  title: string,
  submit: () => any
} & FormProps

class Form extends React.Component<any> {

  render() {
    const { title, handleSubmit, children, submit } = this.props;

    // Test:- what if no provides handleSubmit, submit, valid children

    return (

      <div className="d-flex align-items-center justify-content-center nvx-h-100">
        <div className="row flex-column align-items-center nvx-form-container">
          <img className="img-fluid" src="https://uploads-ssl.webflow.com/5ac8ca69b01ca6387804f83e/5ac8ca9c99758e81e01e46b2_Standard_White_L-p-800.png" alt="fw-logo" />
          <span className="nvx-text nvx-space">{title}</span>
          <form onSubmit={handleSubmit(submit)} >
            {children}
          </form>
        </div>
      </div>
    );
  }
};

export default Form;