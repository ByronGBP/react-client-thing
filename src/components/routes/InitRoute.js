//@flow
import React, { Component } from "react";
import { Route } from "react-router-dom";

import type { ComponentType } from 'react';
import type { ContextRouter } from 'react-router';

import { guard } from '../../hoc/guard';

type Props = {
  component: ComponentType<any>,
} & ContextRouter

class InitRoute extends Component<Props> {

  render() {
    const { component } = this.props;

    return <Route component={component} {...this.props} />;
  }
}

export default guard(InitRoute);

