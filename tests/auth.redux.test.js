import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';

import * as authActions from '../src/redux/actions/auth';
import * as actionsTypes from '../src/types/actions';

import { authReducer, INITIAL_STATE } from '../src/redux/reducers/auth';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
  it('should create an action to AUTH_REQUEST', () => {
    const expectedAction = {
      type: actionsTypes.AUTH_REQUEST,
    };
    expect(authActions.authRequest()).toEqual(expectedAction);
  });

  it('should create an action to AUTH_RECIEVE', () => {
    const token = 'epictoken';
    const expectedAction = {
      type: actionsTypes.AUTH_RECIEVE,
      token
    };
    expect(authActions.authRecieve(token)).toEqual(expectedAction);
  });
});

describe('auth async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates AUTH_RECIEVE when login has been done', () => {
    const url = 'http://localhost:3000/';
    const fecthMock = nock(url)
      .post('/auth/login', { username: 'bbc', password: 'bbc' })
      .reply(200, { token: 'token' });

    const expectedActions = [
      { type: actionsTypes.AUTH_RECIEVE, token: 'token' }
    ];
    const store = mockStore({ token: '' });
    const data = { username: 'bbc', password: 'bbc' };
    return store.dispatch(authActions.login(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates AUTH_REQUEST & AUTH_RECIEVE when getAuthorization has been done', () => {
    const url = 'http://localhost:3000/';
    const fecthMock = nock(url)
      .get('/auth/me')
      .reply(200, { token: 'token' });

    const expectedActions = [
      { type: actionsTypes.AUTH_REQUEST },
      { type: actionsTypes.AUTH_RECIEVE, token: 'token' }
    ];
    const store = mockStore({ token: '' });
    return store.dispatch(authActions.getAuthorization()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates AUTH_RECIEVE when logout has been done', () => {
    const url = 'http://localhost:3000/';
    const fecthMock = nock(url)
      .post('/auth/logout')
      .reply(200, { token: null });

    const expectedActions = [
      { type: actionsTypes.AUTH_RECIEVE, token: null }
    ];
    const store = mockStore({ token: '' });
    return store.dispatch(authActions.logout()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle AUTH_REQUEST', () => {
    const type = actionsTypes.AUTH_REQUEST;
    const expectations = {
      ...INITIAL_STATE, fetching: true
    };
    expect(authReducer(undefined, { type })).toEqual(expectations);
  });

  it('should handle AUTH_RECIEVE', () => {
    const type = actionsTypes.AUTH_RECIEVE;
    const expectations = {
      ...INITIAL_STATE, fetching: false, token: 'token'
    };
    expect(authReducer(undefined, { type, token: 'token' })).toEqual(expectations);
  });
});