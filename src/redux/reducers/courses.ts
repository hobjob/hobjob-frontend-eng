import {
	CoursesState,
	CoursesActions,
	CoursesActionTypes,
} from "../types/courses/ICourses";


const initialState: CoursesState = {
	isLoadedCourseByUrl: false,
	courseByUrl: {
		_id: "",
		url: "",
		title: "",
		description: "",
		price: 0,
		oldPrice: 0,
		image: {
			size_512: "",
			size_768: "",
			size_1024: "",
			size_1536: "",
			size_2048: "",
		},
		masterId: "",
		category: "",
		path: "",
		lessons: [],
		materials: [],
		skills: [],
		useSkills: [],
		tools: [],
	}
};

const courses = (
	state = initialState,
	action: CoursesActions
): CoursesState => {
	if (action.type === CoursesActionTypes.SET_COURSE_BY_URL) {
		return {
			...state,
			courseByUrl: action.payload,
			isLoadedCourseByUrl: true,
		};
	}


	if (action.type === CoursesActionTypes.SET_LOADED_COURSE_BY_URL) {
		return {
			...state,
			isLoadedCourseByUrl: action.payload,
		};
	}

	return state;
};

export default courses;
