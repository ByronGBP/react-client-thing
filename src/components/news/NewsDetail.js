// @flow
import React from 'react';

import type { News } from '../../types/api';

import { formatDate } from '../../utils/misc';

type Props = {
  news: News
}

const NewsDetails = ({ news }: Props) => (
  <div className="d-flex justify-content-center nvx-space">
    <div className="d-flex card flex-row w-75 p-4">
      <div className="d-flex flex-column align-items-center nvx-img">
        <img className="img-fluid" src={news.avatar} alt="fw-default-avatar" />
        <strong className="m-3">{news.owner}</strong>
      </div>
      <div className="card-body">
        <h5 className="card-title text-center">{news.title}</h5>
        <div className="d-flex w-100 justify-content-end mb-3">
          <small>{formatDate(news.date)}</small>
        </div>
        <p className="mb-1">{news.content}</p>
      </div>
    </div>
  </div>
);

export default NewsDetails;