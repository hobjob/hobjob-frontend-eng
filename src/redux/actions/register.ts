import {Dispatch} from "redux";

import {SubmissionError} from "redux-form";

import $api from "../../http/";

import {RegisterActions, RegisterActionTypes} from "../types/register/IRegister";

export const sendRegister = (data: {email: string; password: string}) => {
    return async (dispatch: Dispatch<RegisterActions>) => {
        dispatch({
            type: RegisterActionTypes.SET_SEND_REGISTER,
            payload: true,
        });

        return $api
            .post("/register", data)
            .then(({data}) => {
                localStorage.setItem("accessToken", data.accessToken);

                window.location.href = "/go/training/";
            })
            .catch(({response}) => {
                dispatch({
					type: RegisterActionTypes.SET_SEND_REGISTER,
                    payload: false,
                });

                if (response) {
                    throw new SubmissionError({
                        [response.data.fieldError]: response.data.message,
                    });
                }
            });
    };
};
