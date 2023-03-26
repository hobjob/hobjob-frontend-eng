import { Image } from "../IImage";

export interface UserInfoCourseBuy {
	courseId: string;
	completedLessons: number[];
	dateCreate: string;
	totalLessons: number

	title: string;
	image: Image;
	masterId: string
}

export interface UserInfo {
	_id: string;
	email: string;

	courses: UserInfoCourseBuy[];

	working: boolean
	screenshot: string
}