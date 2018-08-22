// @flow
import React, { Component, type ComponentType } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import type { Token } from '../types/auth';

import { getAuthorization } from '../redux/actions/auth';

type Props = {
  isFetching: boolean,
  isAuthorize: Token,
  getAuthorization: () => any
}

export const guard = (WrappedComponent: ComponentType<any>) => {
  class ComposedComponent extends Component<Props> {

    static defaultProps = {
      isFetching: true
    }

    componentDidMount() {
      this.props.getAuthorization();
    }

    render() {
      const { isFetching } = this.props;
      if (isFetching) {
        return <div>Loading...</div>;
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }
  };

  const mapStatetoProps = (state) => {
    return {
      isFetching: state.auth.fetching,
      isAuthorize: state.auth.token
    };
  };

  const hocCreator = connect(mapStatetoProps, { getAuthorization });
  return hocCreator(ComposedComponent);
};
