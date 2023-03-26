import { UserState, UserActions, UserActionTypes } from "../types/user/IUser";

const initialState: UserState = {
	userInfo: {
		_id: "",
		email: "",

		courses: [],

		working: false,
		screenshot: ""
	},

	isLoadedUserInfo: false,
};

const user = (state = initialState, action: UserActions) => {
	if (action.type === UserActionTypes.SET_USER_INFO) {
		return {
			...state,
			userInfo: action.payload,
			isLoadedUserInfo: true,
		};
	}

	return state;
};

export default user;
