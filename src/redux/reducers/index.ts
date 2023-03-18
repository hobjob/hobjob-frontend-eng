import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import courses from './courses';
import login from './login';
import user from './user';
import passing from './passing';

export const rootReducer = combineReducers({
	courses,
	login,
	user,
	passing,
	form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>