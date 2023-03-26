import {
	MastersState,
	MastersActions,
	MastersActionTypes,
} from "../types/masters/IMasters";

import { Master } from "../../models/IMaster";

const initialState: MastersState = {
	items: {},
	isLoaded: false,

};

const masters = (
	state = initialState,
	action: MastersActions
): MastersState => {
	if (action.type === MastersActionTypes.SET_MASTERS) {
		const newObj: { [key: string]: Master } = {};

		action.payload.map((item) => {
			newObj[item._id] = item;
		});

		return {
			...state,
			items: newObj,
			isLoaded: true,
		};
	}

	return state;
};

export default masters;
