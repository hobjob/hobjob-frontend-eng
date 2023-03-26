import { Dispatch } from "redux";

import $api from "../../http/";

import { MastersActions, MastersActionTypes } from "../types/masters/IMasters";
import { Master } from "../../models/IMaster";

export const fetchMasters = () => {
	return async (dispatch: Dispatch<MastersActions>) => {
		const response = await $api.get<Master[]>(`/masters`);
		dispatch({
			type: MastersActionTypes.SET_MASTERS,
			payload: response.data,
		});
	};
};