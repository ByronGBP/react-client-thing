// @flow
import React from 'react';

import NewsItem from './NewsItem';

import type { News } from '../../types/api';

type Props = {
  news: [News]
}

const NewsList = ({ news }: Props) => (
  <div className="d-flex justify-content-center nvx-space">
    <div className="list-group w-75">
      {news.map((elem) => {
        return <NewsItem key={elem._id} news={elem}/>;
      })}
      
    </div>
  </div>
);

export default NewsList;