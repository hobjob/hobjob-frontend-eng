import React from "react";
import {Link} from "react-router-dom";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {RenderInput, BtnLoader} from "../";

import validate from "./validate";

interface LoginFormProps {
    registerLink?: string;
}

let LoginForm: React.FC<
    LoginFormProps & InjectedFormProps<{}, LoginFormProps>
> = ({handleSubmit, registerLink}) => {
    const {isSend} = useTypedSelector(({login}) => login);

    return (
        <form className="reglog-block" onSubmit={handleSubmit}>
            <div className="reglog-block-title">
                <h2 className="reglog-block__title">Login</h2>
                <Link
                    to={registerLink ? registerLink : "/go/register"}
                    className="reglog-block__subtitle"
                >
                    Register
                </Link>
            </div>
            <div className="input reglog-block-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="email"
                    label="Email"
                />
            </div>
            <div className="input reglog-block-input">
                <Field
                    component={RenderInput}
                    type="password"
                    name="password"
                    label="Password"
                />
            </div>

            {isSend ? (
                <button className="btn reglog-block__btn disabled" disabled>
                    <BtnLoader />
                </button>
            ) : (
                <button className="btn reglog-block__btn">Login</button>
            )}

            <div className="reglog-block-recovery">
                <Link
                    to="/go/password-recovery"
                    className="reglog-block-recovery__link"
                >
                    Forgot your password?
                </Link>
            </div>
        </form>
    );
};

export default reduxForm<{}, LoginFormProps>({
    form: "login-form",
    validate,
})(LoginForm);
