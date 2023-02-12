import { CourseGood } from "./Course/ICourseGood";
import { Image } from "./IImage";

export interface MasterSocials {
	inst: string;
	vk: string;
	tiktok: string;
	telegram: string;
}

export interface Master {
	_id: string;
	name: string;
	surname: string;
	masterDescription: string;
	avatar: Image;
	socials: MasterSocials;
}

export interface MasterById extends Master {
	courses: CourseGood[];
}
