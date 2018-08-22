//@flow
import axios from 'axios';

import type { Dispatch, ThunkAction } from '../../types/redux';
import type { ApiData, ApiActionType, News } from '../../types/api';
import { API_REQUEST, ALL_NEWS_RECIEVE, NEWS_RECIEVE } from '../../types/actions';

// ToTest:-
if (!process.env.API_URL) {
  throw new Error('API_URL not provided');
}

const api = `${process.env.API_URL}/api/news`;
const config = {
  withCredentials: true
};

export const apiRequest = (): ApiActionType => ({
  type: API_REQUEST
});

export const allNewsRecieve = (allNews: ApiData): ApiActionType => ({
  type: ALL_NEWS_RECIEVE,
  allNews
});

export const newsRecieve = (aNews: News): ApiActionType => ({
  type: NEWS_RECIEVE,
  aNews
});

export const getAllNews = (): ThunkAction => {
  return (dispatch: Dispatch) => {
    dispatch(apiRequest());
    return axios.get(api, config)
      .then((response) => {
        const news = response.data.news;
        dispatch(allNewsRecieve(news));
      })
      .catch((err) => {
        if (err.response) {
          return 'Unexpected';
        }
      });
  };
};

export const getNews = (id: string): ThunkAction => {
  return (dispatch: Dispatch) => {
    dispatch(apiRequest());
    return axios.get(`${api}/${id}`, config)
      .then((response) => {
        const news = response.data.news;
        dispatch(newsRecieve(news));
      })
      .catch((err) => {
        if (err.response) {
          return 'Unexpected';
        }
      });
  };
};
