// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsList from '../../components/news/NewsList';

import { getAllNews } from '../actions/api';

import type { State } from '../../types/redux';
import type { News } from '../../types/api';

type Props = {
  news: [News],
  getAllNews: () => any
}

class NewsListContainer extends Component<Props> {

  componentDidMount() {
    this.props.getAllNews();
  }

  render () {
    const { news, getAllNews, ...rest } = this.props;
    if (!news) {
      return <div>Loading...</div>;
    } else {
      return <NewsList news={news} {...rest} />;
    }
  }

}


const mapStateToProps = (state: State) => {
  const news = state.api.allNews;
  return {
    news
  };
};

export default connect(mapStateToProps, { getAllNews })(NewsListContainer);
