import { Dispatch } from "redux";
import { SubmissionError } from "redux-form";

import $api from "../../http/";

import { UserActions, UserActionTypes } from "../types/user/IUser";

import { UserInfo } from "../../models/User/IUserInfo";
import { UserReferral } from "../../models/User/IUserReferral";

export const fetchUserInfo = () => {
	return async (dispatch: Dispatch<UserActions>) => {
		const response = await $api.get<UserInfo>("/my/info");

		dispatch({
			type: UserActionTypes.SET_USER_INFO,
			payload: response.data,
		});
	};
};

export const fetchUserReferrals = () => {
	return async (dispatch: Dispatch<UserActions>) => {
		const response = await $api.get<UserReferral[]>("/my/referrals");

		dispatch({
			type: UserActionTypes.SET_USER_REFERRALS,
			payload: response.data,
		});
	};
};

export const fetchUpdateUser = (data: any) => {
	return async (dispatch: Dispatch<UserActions>) => {
		dispatch({
			type: UserActionTypes.SET_SEND_UPDATE_USER_INFO,
			payload: true,
		});

		const response = await $api.put<UserInfo>("/my/info", data);

		dispatch({
			type: UserActionTypes.SET_SEND_UPDATE_USER_INFO,
			payload: false,
		});

		dispatch({
			type: UserActionTypes.SET_USER_INFO,
			payload: response.data,
		});
	};
};

export const fetchUpdateUserPassword = (data: {
	currentPassword: string;
	newPassword: string;
	newPasswordRepeat: string;
}) => {
	return async (dispatch: Dispatch<UserActions>) => {
		dispatch({
			type: UserActionTypes.SET_SEND_UPDATE_USER_PASSWORD,
			payload: true,
		});

		return $api
			.put("/my/password", data)
			.then(() => {
				window.location.reload();
			})
			.catch(({ response }) => {
				dispatch({
					type: UserActionTypes.SET_SEND_UPDATE_USER_PASSWORD,
					payload: false,
				});

				if (response) {
					throw new SubmissionError({
						[response.data.fieldError]: response.data.message,
					});
				}
			});
	};
};

export const addUserCourse = (courseId: string) => {
	return async (dispatch: Dispatch<UserActions>) => {
		$api.put("/my/courses", { courseId }).then(() => {
			window.location.href = "/go/training";
		});
	};
};

export const hiddenUserCourse = (courseId: string) => {
	return async (dispatch: Dispatch<UserActions>) => {
		$api.delete(`/my/courses/${courseId}`).then(() => {
			window.location.reload();
		});
	};
};

export const updateCountViewingDuration = (
	courseId: string,
	lessonIndex: number,
	seconds: number
) => {
	return async (dispatch: Dispatch<UserActions>) => {
		$api.put("/my/courses/lesson/duration", {
			courseId,
			lessonIndex,
			seconds,
		});
	};
};
