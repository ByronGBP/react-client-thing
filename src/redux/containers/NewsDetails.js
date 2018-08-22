// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsDetail from '../../components/news/NewsDetail';

import { getNews } from '../actions/api';

import type { State } from '../../types/redux';
import type { News } from '../../types/api';
import type { ContextRouter } from 'react-router';

type Props = {
  news: News,
  getNews: () => any
} & ContextRouter;

class NewsDetailContainer extends Component<Props> {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getNews(id);
  }

  render() {
    const { news } = this.props;
    if (!news) {
      return <div>Loading...</div>;
    } else {
      return <NewsDetail news={news} />;
    }
  }
}


const mapStateToProps = (state: State) => {
  const news = state.api.aNews;
  return {
    news
  };
};

export default connect(mapStateToProps, { getNews })(NewsDetailContainer);
