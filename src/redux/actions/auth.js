// @flow
import axios from 'axios';

import type { Dispatch, ThunkAction } from '../../types/redux';
import type { AuthData } from '../../types/auth';

import { AUTH_USER, FETCHING_AUTH } from '../../types/actions';

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

export const login = (data: AuthData): ThunkAction => {
  return (dispatch: Dispatch) => {
    return axios.post(api + '/login', data, config)
      .then((response) => {
        const token = response.data.token;
        dispatch({ type: AUTH_USER, token, user: null });
      })
      .catch((err) => {
        if (err.response) {
          const status = err.response.status;
          return loginErrors[status] || 'Unexpected.';
        }
      });
  };
};
