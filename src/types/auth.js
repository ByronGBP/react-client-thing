// @flow
import { AUTH_USER } from './actions';

export type Token = string | null;

export type AuthActionType = AUTH_USER;

export type AuthData = {
  username: string,
  password: string
} | null;

export type AuthAction = { type: AuthActionType, +token: Token, +user: AuthData }

export type AuthState = { +token: Token, +user: AuthData }
