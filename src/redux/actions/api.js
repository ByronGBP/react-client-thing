//@flow
import axios from 'axios';

import type { Dispatch, ThunkAction } from '../../types/redux';
import type { ApiData, ApiActionType, News } from '../../types/api';
import { API_REQUEST, NEWS_RECIEVE } from '../../types/actions';

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

export const apiRecieve = (allNews: ApiData): ApiActionType => ({
  type: NEWS_RECIEVE,
  allNews
});

// TODO:- create a high order function for all of this
export const getAllNews = (): ThunkAction => {
  
  return (dispatch: Dispatch) => {
    dispatch(apiRequest());
    return axios.get(api, config)
      .then((response) => {
        const news = response.data.news;
        dispatch(apiRecieve(news));
      })
      .catch((err) => {

        if (err.response) {
          return 'Unexpected';
        }
      });
  };
};
