import React from "react";
import {Link} from "react-router-dom";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {RenderInput, BtnLoader} from "../";

import validate from "./validate";

let RegisterForm: React.FC<InjectedFormProps> = ({handleSubmit}) => {
    const {isSend} = useTypedSelector(({login}) => login);

    return (
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-form-progress">
                <p className="reglog-form-progress__item active">1. Register</p>
                <p className="reglog-form-progress__item">2. Payment</p>
                <p className="reglog-form-progress__item">3. New Skill</p>
            </div>

            <div className="reglog-form-title">
                <h2 className="reglog-form-title__title">Register</h2>

                <Link to="/go/login" className="reglog-form-title__subtitle">
                    Login
                </Link>
            </div>
            <div className="input reglog-form-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="email"
                    label="Email"
                />
            </div>
            <div className="input reglog-form-input">
                <Field
                    component={RenderInput}
                    type="password"
                    name="password"
                    label="Password"
                />
            </div>

            {isSend ? (
                <button className="btn reglog-form__btn disabled" disabled>
                    <BtnLoader />
                </button>
            ) : (
                <button className="btn reglog-form__btn">Register</button>
            )}
        </form>
    );
};

export default reduxForm<{}>({
    form: "register-form",
    validate,
})(RegisterForm);
