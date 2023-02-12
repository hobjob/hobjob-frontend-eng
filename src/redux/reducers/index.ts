import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import courses from './courses';
import categories from './categories';
import masters from './masters';
import register from './register';
import login from './login';
import password_recovery from './password_recovery';
import user from './user';
import passing from './passing';
import paymentCourse from './payment/paymentCourse';

export const rootReducer = combineReducers({
	courses,
	categories,
	masters,
	register,
	login,
	password_recovery,
	user,
	passing,
	paymentCourse,
	form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>