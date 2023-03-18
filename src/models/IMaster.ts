import { Image } from "./IImage";

export interface MasterSocials {
	inst: string;
	vk: string;
	tiktok: string;
	telegram: string;
}

export interface MasterWorkVideo {
	cover: Image;
	url: string
}

export interface Master {
	_id: string;
	name: string;
	surname: string;
	masterDescription: string;
	worksImage: Image[];
	worksVideo: MasterWorkVideo[];
	avatar: Image;
	socials: MasterSocials;
}
