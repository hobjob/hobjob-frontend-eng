import { saveAs } from "file-saver";
import { Dispatch } from "redux";

import { PassingActions, PassingActionTypes } from "../types/passing/passing";

import { PassingCourse } from "../../models/Passing/IPassing";

import $api from "../../http/";

export const fetchPassingCourseById = (courseId: string) => {
	return async (dispatch: Dispatch<PassingActions>) => {
		dispatch({
			type: PassingActionTypes.SET_PASSING_IS_LOADED_COURSE,
			payload: false
		})

		const { data } = await $api.get<PassingCourse>(`/my/passing/course/${courseId}`);

		dispatch({
			type: PassingActionTypes.SET_PASSING_COURSE,
			payload: data
		})
	};
};


export const fetchPassingCourseLessonMaterial = (
	courseId: string,
	lessonNum: number,
	materialNum: number,
	title: string
) => {
	return async () => {
		const response = await $api.get(
			`/courses/${courseId}/materials/${lessonNum}/${materialNum}`,
			{
				responseType: "blob",
			}
		);

		let myUrl = window.URL.createObjectURL(response.data);

		saveAs(myUrl, title);
	};
};
