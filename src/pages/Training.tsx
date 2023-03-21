import React from "react";
import {Helmet} from "react-helmet";
import {Navigate} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {Loader, TrainingBuy} from "../components/";

const Training: React.FC = () => {
    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);

    return (
        <>
            <Helmet>
                <title>My training</title>
            </Helmet>

            {localStorage.getItem("accessToken") ? (
                isLoadedUserInfo ? (
                    <>
                        <section className="training">
                            <div className="container">
                                <div className="training-wrapper">
                                    {userInfo.courses.length ? (
                                        <TrainingBuy />
                                    ) : null}
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <Loader />
                )
            ) : (
                <Navigate to="/go/login" />
            )}
        </>
    );
};

export default Training;
