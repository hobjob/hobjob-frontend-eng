import { UserInfo } from "../../../models/User/IUserInfo";

export interface UserState {
	userInfo: UserInfo;

	isLoadedUserInfo: boolean;
}

export enum UserActionTypes {
	SET_USER_INFO = "SET_USER_INFO",
}

interface setUserInfo {
	type: UserActionTypes.SET_USER_INFO;
	payload: UserInfo;
}

export type UserActions = setUserInfo