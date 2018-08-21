// @flow
import axios from 'axios';

import type { Dispatch, ThunkAction } from '../../types/redux';
import type { AuthData, AuthActionType, Token } from '../../types/auth';

import { AUTH_RECIEVE, AUTH_REQUEST } from '../../types/actions';

// ToTest:-
if (!process.env.API_URL) {
  throw new Error('API_URL not provided');
}

const api = `${process.env.API_URL}/auth`;
const config = {
  withCredentials: true
};

// TODO:- figure it out where to put this
const loginErrors = {
  '401': 'You seems to been already logged.',
  '422': 'All fields are required.',
  '404': 'Incorrect username or password.',
  '500': 'Unexpected error. Try again.'
};

export const authRequest = (): AuthActionType => ({
  type: AUTH_REQUEST
});

export const authRecieve = (token: Token): AuthActionType => ({
  type: AUTH_RECIEVE,
  token
});

// TODO:- create a high order function for all of this
export const login = (data: AuthData): ThunkAction => {
  return (dispatch: Dispatch) => {
    return axios.post(api + '/login', data, config)
      .then((response) => {
        const token = response.data.token;
        dispatch(authRecieve(token));
      })
      .catch((err) => {
        if (err.response) {
          const status = err.response.status;
          return loginErrors[status] || 'Unexpected.';
        }
      });
  };
};

export const getAuthorization = (): ThunkAction => {
  return (dispatch: Dispatch) => {
    dispatch(authRequest());
    return axios.get(api + '/me', config)
      .then((response) => {
        const token = response.data.token;
        dispatch(authRecieve(token));
      })
      .catch((err) => {
        // TODO:- handle 500 & 404 errors
        if (err.response) {
          dispatch(authRecieve(null));
        }
      });
  };
};

export const logout = (): ThunkAction => {
  return (dispatch: Dispatch) => {
    return axios.post(api + '/logout', {}, config)
      .then((response) => {
        dispatch(authRecieve(null));
      })
      .catch((err) => {
        if (err.response) {
          // TODO:- handle 401 error
          return err.response.data.error;
        }
      });
  };
};
