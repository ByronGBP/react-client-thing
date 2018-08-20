// @flow
import { AUTH_USER } from '../../types/actions';
import type { AuthActionType, AuthAction, AuthState } from '../../types/auth';

const INITIAL_STATE: AuthState = {
  token: null,
  user: null
};

const authUser = (state: AuthState, action: AuthAction): AuthState => {
  return { ...state, token: action.token, user: action.user };
};

const reducers: { [AuthActionType]: (state: AuthState, action: AuthAction) => AuthState } = {
  AUTH_USER: authUser
};

export const authReducer = (state: AuthState = INITIAL_STATE, action: AuthAction): AuthState => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  return state;
};