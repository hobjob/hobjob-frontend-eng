import { CourseGood } from "../../../models/Course/ICourseGood";

export interface CoursesState {
	isLoadedCourseByUrl: boolean;
	courseByUrl: CourseGood;
}

export enum CoursesActionTypes {
	SET_COURSE_BY_URL = "SET_COURSE_BY_URL",
	SET_LOADED_COURSE_BY_URL = "SET_LOADED_COURSE_BY_URL",
}


interface setCourseByUrlAction {
	type: CoursesActionTypes.SET_COURSE_BY_URL;
	payload: CourseGood;
}

interface setLoadedCourseByUrlAction {
	type: CoursesActionTypes.SET_LOADED_COURSE_BY_URL;
	payload: boolean;
}

export type CoursesActions = setCourseByUrlAction | setLoadedCourseByUrlAction
