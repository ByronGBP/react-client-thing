//@flow
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import type { ComponentType } from 'react';
import type { ContextRouter } from 'react-router';
import type { Token } from '../../types/auth';

import { guard } from '../../hoc/guard';

type Props = {
  component: ComponentType<any>,
  isAuthorize: Token
} & ContextRouter

class AnonRoute extends Component<Props> {

  render() {
    console.log('from AnonRoute');
    const { component, isAuthorize } = this.props;

    if (!isAuthorize) {
      return <Route component={component} {...this.props} />;
    } else {
      const direction = {
        pathname: "/news"
      };
      return <Redirect to={direction} />;
    }
  }
}

export default guard(AnonRoute);

