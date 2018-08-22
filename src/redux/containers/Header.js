// @flow
import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/auth';

import AuthHeader from '../../components/header/AuthHeader';
import Header from '../../components/header/Header';

const HeaderContainer = ({ logout }) => (
  <Header>
    <AuthHeader logout={logout} />
  </ Header>
);

const hocCreator = connect(null, { logout });

export default hocCreator(HeaderContainer);