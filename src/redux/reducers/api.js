// @flow
import type { ApiData, ApiActionType, News, ApiState, ApiAction } from '../../types/api';
import { API_REQUEST, ALL_NEWS_RECIEVE, NEWS_RECIEVE } from '../../types/actions';

export const INITIAL_STATE: ApiState = {
  allNews: null,
  aNews: null,
  fetching: false
};

const allNewsRecieve = (state: ApiState, action: ApiAction): ApiState => {
  return { ...state, allNews: action.allNews, fetching: false };
};

const newsRecieve = (state: ApiState, action: ApiAction): ApiState => {
  return { ...state, aNews: action.aNews, fetching: false };
};

const apiRequest = (state: ApiState, action: ApiAction): ApiState => {
  return { ...state, fetching: true };
};

const reducers: { [ApiActionType]: (state: ApiState, action: ApiAction) => ApiState } = {
  ALL_NEWS_RECIEVE: allNewsRecieve,
  NEWS_RECIEVE: newsRecieve,
  API_REQUEST: apiRequest
};

export const apiReducer = (state: ApiState = INITIAL_STATE, action: ApiAction): ApiState => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  return state;
};