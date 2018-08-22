// @flow
import React from 'react';

import NewsDetail from '../redux/containers/NewsDetails';

import { withHeader } from '../hoc/withHeader';

const SingleNews = (props) => (
  <NewsDetail {...props}/>
);

export default withHeader(SingleNews);