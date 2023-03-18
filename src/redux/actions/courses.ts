import { Dispatch } from "redux";

import $api from "../../http/";

import {
	CoursesActions,
	CoursesActionTypes,
} from "../types/courses/ICourses";

import { CourseGood } from "../../models/Course/ICourseGood";


export const fetchCourseByUrl = (url: string) => {
	return async (dispatch: Dispatch<CoursesActions>) => {
		dispatch({
			type: CoursesActionTypes.SET_LOADED_COURSE_BY_URL,
			payload: false,
		});

		try {
			const response = await $api.get<CourseGood[]>("/courses", {
				params: { url },
			});

			if (response.data[0]) {
				dispatch({
					type: CoursesActionTypes.SET_COURSE_BY_URL,
					payload: response.data[0],
				});
			} else {
				throw new Error();
			}
		} catch (e) {
			dispatch({
				type: CoursesActionTypes.SET_LOADED_COURSE_BY_URL,
				payload: true,
			});
		}
	};
};

export const setLoadedCourseByUrl = (status: boolean) => ({
	type: CoursesActionTypes.SET_LOADED_COURSE_BY_URL,
	payload: status,
});
