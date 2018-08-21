// @flow
import type { ApiData, ApiActionType, News, ApiState, ApiAction } from '../../types/api';
import { API_REQUEST, NEWS_RECIEVE } from '../../types/actions';

const INITIAL_STATE: ApiState = {
  allNews: null,
  aNews: null,
  fetching: false
};

const newsRecieve = (state: ApiState, action: ApiAction): ApiState => {
  return { ...state, allNews: action.allNews, fetching: false };
};

const newsRequest = (state: ApiState, action: ApiAction): ApiState => {
  return { ...state, fetching: true };
};

const reducers: { [ApiActionType]: (state: ApiState, action: ApiAction) => ApiState } = {
  NEWS_RECIEVE: newsRecieve,
  API_REQUEST: newsRequest
};

export const apiReducer = (state: ApiState = INITIAL_STATE, action: ApiAction): ApiState => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  return state;
};