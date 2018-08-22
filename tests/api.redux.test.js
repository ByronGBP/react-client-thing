import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';

import * as apiActions from '../src/redux/actions/api';
import * as actionsTypes from '../src/types/actions';

import { apiReducer, INITIAL_STATE } from '../src/redux/reducers/api';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('api actions', () => {
  it('should create an action to API_REQUEST', () => {
    const expectedAction = {
      type: actionsTypes.API_REQUEST,
    };
    expect(apiActions.apiRequest()).toEqual(expectedAction);
  });

  it('should create an action to ALL_NEWS_RECIEVE', () => {
    const fakeNew = ['fake new'];
    const expectedAction = {
      type: actionsTypes.ALL_NEWS_RECIEVE,
      allNews: ['fake new']
    };
    expect(apiActions.allNewsRecieve(fakeNew)).toEqual(expectedAction);
  });

  it('should create an action to NEWS_RECIEVE', () => {
    const fakeNew = 'fake news';
    const expectedAction = {
      type: actionsTypes.NEWS_RECIEVE,
      aNews: 'fake news'
    };
    expect(apiActions.newsRecieve(fakeNew)).toEqual(expectedAction);
  });
});

describe('api async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates API_REQUEST & ALL_NEWS_RECIEVE when getAllNews has been done', () => {
    const url = 'http://localhost:3000/';
    const fecthMock = nock(url)
      .get('/api/news')
      .reply(200, { news:['fake news']});

    const expectedActions = [
      { type: actionsTypes.API_REQUEST },
      { type: actionsTypes.ALL_NEWS_RECIEVE, allNews: ['fake news'] }
    ];
    const store = mockStore({ allNews: [] });
    return store.dispatch(apiActions.getAllNews()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates API_REQUEST & NEWS_RECIEVE when getAllNews has been done', () => {
    const url = 'http://localhost:3000/';
    const fecthMock = nock(url)
      .get('/api/news/fakeid')
      .reply(200, { news:'fake news'});

    const expectedActions = [
      { type: actionsTypes.API_REQUEST },
      { type: actionsTypes.NEWS_RECIEVE, aNews: 'fake news' }
    ];
    const store = mockStore({ aNews: [] });
    return store.dispatch(apiActions.getNews('fakeid')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});

describe('api reducer', () => {
  it('should return the initial state', () => {
    expect(apiReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle API_REQUEST', () => {
    const type = actionsTypes.API_REQUEST;
    const expectations = {
      ...INITIAL_STATE, fetching: true
    };
    expect(apiReducer(undefined, { type })).toEqual(expectations);
  });

  it('should handle API_REQUEST', () => {
    const type = actionsTypes.API_REQUEST;
    const expectations = {
      ...INITIAL_STATE, fetching: true
    };
    expect(apiReducer(undefined, { type })).toEqual(expectations);
  });

  it('should handle NEWS_RECIEVE', () => {
    const type = actionsTypes.NEWS_RECIEVE;
    const expectations = {
      ...INITIAL_STATE, fetching: false, aNews: 'fake new'
    };
    expect(apiReducer(undefined, { type, aNews: 'fake new' })).toEqual(expectations);
  });

  it('should handle ALL_NEWS_RECIEVE', () => {
    const type = actionsTypes.ALL_NEWS_RECIEVE;
    const expectations = {
      ...INITIAL_STATE, fetching: false, allNews: ['fake new']
    };
    expect(apiReducer(undefined, { type, allNews: ['fake new'] })).toEqual(expectations);
  });
});