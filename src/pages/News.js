// @flow
import React from 'react';

import { withHeader } from '../hoc/withHeader';

import NewsList from '../redux/containers/NewsList';

const News = (props) => (
  <NewsList {...props}/>
);

export default withHeader(News);