import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {Navigate, useSearchParams} from "react-router-dom";

import {sendRegister} from "../redux/actions/register";
import {fetchCourseById} from "../redux/actions/courses";

import {ReglogProgressbar, RegisterForm, ReglogBuyBlock} from "../components/";

const Register: React.FC = () => {
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const courseId = searchParams.get("course");

    const onSubmit = ({email, name, password}: any) => {
        // const paymentInfo =
        //     !courseId
        //         ? undefined
        //         : courseId
        //         ? `buy.${courseId}`
        //         : `subscribe.${typeSubscribe}`;
        // return dispatch(
        //     sendRegister(
        //         {
        //             email,
        //             name,
        //             password,
        //             paymentInfo,
        //         },
        //         localStorage.getItem("ref")
        //             ? (localStorage.getItem("ref") as string)
        //             : "",
        //         paymentInfo && paymentInfo.split(".")[0]
        //     )
        // );
    };

    React.useEffect(() => {
        if (courseId) dispatch(fetchCourseById(courseId ? courseId : ""));
    }, []);

    return (
        <>
            {!localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Registration</title>
                    </Helmet>
                    <section className="reglog">
                        <div className="container">
                            <div
                                className={`reglog-wrapper ${
                                    courseId ? "space-between" : "center"
                                } `}
                            >
                                <div className="reglog-form-wrapper">
                                    <ReglogProgressbar number={1} />

                                    <RegisterForm
                                        onSubmit={onSubmit}
                                        loginLink="/go/login"
                                    />
                                </div>
                                <div className="reglog-product-wrapper">
                                    {courseId ? <ReglogBuyBlock /> : null}
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
