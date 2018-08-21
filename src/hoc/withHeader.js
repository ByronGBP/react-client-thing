// @flow
import React, { Component, Fragment } from 'react';

import Header from '../redux/containers/Header';

import type { ComponentType } from 'react';

export const withHeader = (WrappedComponent: ComponentType<any>) => {
  return class extends Component<any> {
    render() {
      return (
        <Fragment>
          <Header />
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};