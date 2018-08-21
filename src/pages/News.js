// @flow
import React from 'react';

import { withHeader } from '../hoc/withHeader';

import NewsList from '../components/news/NewsList';

const News = () => (
  <NewsList/>
);

export default withHeader(News);