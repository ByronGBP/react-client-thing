// @flow
import React from 'react';

const NewsItem = () => (
  <div className="list-group-item list-group-item-action flex-column align-items-start nvx-hover-click">
    <div className="d-flex">
      <div className="d-flex align-items-center nvx-img">
        <img className="img-fluid" src="https://htmlcolors.com/img/change-user.png" alt="fw-default-avatar" />
      </div>
      <div className="d-flex align-items-center w-100">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
      </div>
    </div>
  </div>
);

export default NewsItem;