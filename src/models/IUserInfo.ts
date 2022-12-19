import moment from "moment";

import { Image } from "./IImage";

interface UserInfoSubscribe {
	working: boolean;

	typeSubscribe: string;
	nextTypeSubscribe: string;

	periodInfo: {
		count: number;
		title: moment.unitOfTime.DurationConstructor;
	};

	registrationSubscribe: string;

	stoppedSubscribe: string;
	lastDebitStoppedSubscribe: string;
}

export interface UserInfoCourse {
	courseId: string;
	completedLessons: { [key: number]: number };
	dateCreate: string;

	lessons: { countViewingDuration: number }[];

	visible: boolean;
}

interface UserInfoPayment {
	auto: boolean;
	number: string;
}

export interface UserInfo {
	_id: string;
	email: string;
	avatar: Image;
	city: string;
	dateOfBirth: string;

	name: string;
	surname: string;
	phone: string;

	subscribe: UserInfoSubscribe;
	courses: UserInfoCourse[];
	payment: UserInfoPayment;
}

export interface UserInfoState extends Omit<UserInfo, "courses"> {
	courses: { [key: string]: UserInfoCourse };
}
