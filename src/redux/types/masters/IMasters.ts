import { Master } from "../../../models/IMaster";

export interface MastersState {
	items: { [key: string]: Master };
	isLoaded: boolean;
}

export enum MastersActionTypes {
	SET_MASTERS = "SET_MASTERS",
}

interface setMastersAction {
	type: MastersActionTypes.SET_MASTERS;
	payload: Master[];
}

export type MastersActions = setMastersAction
