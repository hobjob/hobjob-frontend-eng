import React from "react";
import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {RegisterForm} from "../components/";

import {sendRegister} from "../redux/actions/register";

import Logo from "../assets/images/logo-aryan.svg";

const Register: React.FC = () => {
    const dispatch = useDispatch();

    const onSubmit = ({email, password}: any) => {
        return dispatch(sendRegister({email, password}));
    };

    return (
        <>
            <Helmet>
                <title>Register</title>
            </Helmet>

            {!localStorage.getItem("accessToken") ? (
                <section className="reglog">
                    <div className="container">
                        <div className="reglog-wrapper center">
                            <div className="reglog-logo">
                                <img
                                    src={Logo}
                                    alt=""
                                    className="reglog-logo__img"
                                />
                            </div>

                            <div className="reglog-form-wrapper">
                                <RegisterForm onSubmit={onSubmit} />
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <Navigate to="/go/training" />
            )}
        </>
    );
};

export default Register;
