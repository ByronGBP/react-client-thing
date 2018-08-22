// @flow
import { API_REQUEST, ALL_NEWS_RECIEVE, NEWS_RECIEVE } from './actions';

export type ApiActionType = API_REQUEST | ALL_NEWS_RECIEVE | NEWS_RECIEVE;

export type News = {
  content: string,
  title: string,
  owner: string,
  date: string,
  avatar: string,
  _id: string
}

export type ApiData = {
  news: [News]
} | null;

export type ApiAction = { type: ApiActionType, +allNews: ApiData, +fetching: boolean, aNews: News | null  }

export type ApiState = { +allNews: ApiData, +fetching: boolean, +aNews: News | null }
