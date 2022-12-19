import {UserInfoState, UserInfo} from "../../../models/IUserInfo";
import {CoursePassing} from "../../../models/ICoursePassing";

export interface UserState {
    userInfo: UserInfoState;
    courses: {[key: string]: CoursePassing};

    isLoadedUserInfo: boolean;
    isLoadedUserCourses: boolean;
    isLoadedReferrals: boolean;
    isLoadedMasterCourses: boolean;

    isSendUpdateUserInfo: boolean;
    isSendUpdateUserPassword: boolean;
}

export enum UserActionTypes {
    SET_USER_INFO = "SET_USER_INFO",
    SET_USER_COURSES = "SET_USER_COURSES",
    SET_USER_REFERRALS = "SET_USER_REFERRALS",
    SET_SEND_UPDATE_USER_INFO = "SET_SEND_UPDATE_USER_INFO",
    SET_SEND_UPDATE_USER_PASSWORD = "SET_SEND_UPDATE_USER_PASSWORD",
}

interface setUserInfo {
    type: UserActionTypes.SET_USER_INFO;
    payload: UserInfo;
}

interface setUserCourses {
    type: UserActionTypes.SET_USER_COURSES;
    payload: CoursePassing[];
}

interface setSendUpdateUserInfo {
    type: UserActionTypes.SET_SEND_UPDATE_USER_INFO;
    payload: boolean;
}

interface setSendUpdateUserPassword {
    type: UserActionTypes.SET_SEND_UPDATE_USER_PASSWORD;
    payload: boolean;
}

export type UserActions =
    | setUserInfo
    | setUserCourses
    | setSendUpdateUserInfo
    | setSendUpdateUserPassword;
