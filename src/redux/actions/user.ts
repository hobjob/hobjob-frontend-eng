import { Dispatch } from "redux";

import $api from "../../http/";

import { UserActions, UserActionTypes } from "../types/user/IUser";

import { UserInfo } from "../../models/User/IUserInfo";

export const fetchUserInfo = () => {
	return async (dispatch: Dispatch<UserActions>) => {
		const response = await $api.get<UserInfo>("/my/info");

		dispatch({
			type: UserActionTypes.SET_USER_INFO,
			payload: response.data,
		});
	};
};

export const uploadScreenshot = (data: any) => {
	return async (dispatch: Dispatch<UserActions>) => {
		const response = await $api.post<UserInfo>("/my/upload-screenshot", data);

		dispatch({
			type: UserActionTypes.SET_USER_INFO,
			payload: response.data,
		});

		window.location.reload();
	};
};