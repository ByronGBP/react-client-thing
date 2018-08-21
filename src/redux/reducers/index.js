//@flow
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer as auth } from './auth';
import { apiReducer as api } from './api';

export const reducers = combineReducers({
  auth,
  api,
  form: formReducer
});
