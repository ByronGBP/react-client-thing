//@flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { AuthAction, AuthState } from './auth';
import type { ApiAction, ApiState } from './api';

export type State = {
  auth: AuthState,
  api: ApiState
};
export type Action = AuthAction | ApiAction;

// Redux and Dispatch Store has a generic State and Action
export type Store = ReduxStore<State, Action>
export type Dispatch = ReduxDispatch<Action> & ThunkAction;

// Convienient types for thunk
type Thunk<A> = (dispatch: Dispatch, getState: GetState) => any;
export type GetState = () => State;
export type ThunkAction = Thunk<Action>;
