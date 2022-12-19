import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {Navigate} from "react-router-dom";

import {sendRegister} from "../redux/actions/register";

import {
    PaymentProgressbar,
    RegisterForm,
} from "../components/";

const Register: React.FC = () => {
    const dispatch = useDispatch();

    const [isYearSubscribe, setIsYearSubscribe] = React.useState(false);

    const onSubmit = ({email, name, password}: any) => {
        return dispatch(
            sendRegister(
                {
                    email,
                    name,
                    password,
                    nextTypeSubscribe: isYearSubscribe
                        ? "year-subscribe"
                        : "month-subscribe",
                },
                localStorage.getItem("ref")
                    ? JSON.parse(localStorage.getItem("ref") as string)
                    : ""
            )
        );
    };

    const setYearSubscribe = () => {
        setIsYearSubscribe(!isYearSubscribe);
    };

    return (
        <>
            {!localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Register</title>
                    </Helmet>
                    <section className="reglog">
                        <div className="container">
                            <div className="reglog-wrapper">
                                <PaymentProgressbar number={1} />

                                <div className="reglog-block-wrapper">
                                    <RegisterForm
                                        onSubmit={onSubmit}
                                        loginLink="/go/login"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
};

export default Register;
