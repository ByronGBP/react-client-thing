// @flow
import React from 'react';

import NewsItem from './NewsItem';

const NewsList = () => (
  <div className="d-flex justify-content-center nvx-space">
    <div className="list-group w-75">
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  </div>
);

export default NewsList;