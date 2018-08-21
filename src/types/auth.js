// @flow
import { AUTH_REQUEST, AUTH_RECIEVE } from './actions';

export type Token = string | null;

export type AuthActionType = AUTH_REQUEST | AUTH_RECIEVE;

export type AuthData = {
  username: string,
  password: string
} | null;

export type AuthAction = { type: AuthActionType, +token: Token, +user: AuthData, +fetching: boolean  }

export type AuthState = { +token: Token, +user: AuthData, +fetching: boolean  }
