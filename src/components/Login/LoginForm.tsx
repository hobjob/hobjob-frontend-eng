import React from "react";
import {Link} from "react-router-dom";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {RenderInput, BtnLoader} from "../";

import validate from "./validate";

let LoginForm: React.FC<InjectedFormProps> = ({handleSubmit}) => {
    const {isSend} = useTypedSelector(({login}) => login);

    return (
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-form-title">
                <h2 className="reglog-form-title__title">Login</h2>

                <Link to="/go/register" className="reglog-form-title__subtitle">
                    Register
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
                <button className="btn reglog-form__btn">Login</button>
            )}
        </form>
    );
};

export default reduxForm<{}>({
    form: "login-form",
    validate,
})(LoginForm);
