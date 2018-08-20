//@flow
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer as auth } from './auth';

export const reducers = combineReducers({
  auth,
  form: formReducer
});
