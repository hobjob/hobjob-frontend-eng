import React from "react";
import {Link} from "react-router-dom";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {RenderInput, BtnLoader} from "../";

import validate from "./validate";

interface RegisterFormProps {
    loginLink: string;
}

let RegisterForm: React.FC<
    RegisterFormProps & InjectedFormProps<{}, RegisterFormProps>
> = ({handleSubmit, loginLink}) => {
    const {isSend} = useTypedSelector(({register}) => register);

    return (
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-form-title">
                <h2 className="reglog-form__title">Register</h2>
                <Link
                    to={loginLink ? loginLink : "/go/login"}
                    className="reglog-form__subtitle"
                >
                    Login
                </Link>
            </div>

            <div className="input reglog-form-input">
                <Field
                    component={RenderInput}
                    type="name"
                    name="name"
                    label="Name"
                />
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
            <span className="reglog-form__policy">
                By clicking on the button, I agree to the processing{" "}
                <a href="/policy">Personal Information</a> and{" "}
                <a href="/public-offer">public offer</a>
            </span>
        </form>
    );
};

export default reduxForm<{}, RegisterFormProps>({
    form: "register-form",
    validate,
})(RegisterForm);
