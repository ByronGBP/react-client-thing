// @flow
import React from 'react';

import type { ContextRouter } from 'react-router';
import type { News } from '../../types/api';

type Props = {
  news: News
} & ContextRouter

const NewsItem = ({ news, history }: Props) => {
  const onClick = () => {
    history.push(`/news/${news._id}`);
  };

  return (
    <div onClick={onClick} className="list-group-item list-group-item-action flex-column align-items-start nvx-hover-click">
      <div className="d-flex">
        <div className="d-flex align-items-center nvx-img">
          <img className="img-fluid" src={news.avatar} alt="fw-default-avatar" />
        </div>
        <div className="d-flex align-items-center w-100">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{news.title}</h5>
            <small>{news.date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;