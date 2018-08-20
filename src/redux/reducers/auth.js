// @flow
import { AUTH_USER, AUTH_REQUEST, AUTH_RECIEVE } from '../../types/actions';
import type { AuthActionType, AuthAction, AuthState } from '../../types/auth';

const INITIAL_STATE: AuthState = {
  token: null,
  user: null,
  fetching: true
};

//NOTE:- putting fetching to false makes guard render the WrappedComponent before auth
//TODO:- Fix -> With a new action method shouldGetAuth or new reducer only for fetching
const authRecieve = (state: AuthState, action: AuthAction): AuthState => {
  return { ...state, token: action.token, fetching: false };
};

const authRequest = (state: AuthState, action: AuthAction): AuthState => {
  return { ...state, fetching: true};
};

const reducers: { [AuthActionType]: (state: AuthState, action: AuthAction) => AuthState } = {
  AUTH_RECIEVE: authRecieve,
  AUTH_REQUEST: authRequest
};

export const authReducer = (state: AuthState = INITIAL_STATE, action: AuthAction): AuthState => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  return state;
};