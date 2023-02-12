import React from "react";
import {Helmet} from "react-helmet";
import {Navigate} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {
    Loader,
    TrainingNull,
    TrainingBuy,
} from "../components/";

const Training: React.FC = () => {
    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);
    const isLoadedMasters = useTypedSelector(({masters}) => masters.isLoaded);

    const isNull: () => boolean = () => {
        return (
            !userInfo.courses.buy.length && !userInfo.courses.subscribe.length
        );
    };

    return (
        <>
            <Helmet>
                <title>Мое обучение</title>
            </Helmet>

            {localStorage.getItem("accessToken") ? (
                isLoadedUserInfo && isLoadedMasters ? (
                    <>
                        <section className="training">
                            <div className="container">
                                <div className="training-wrapper">
                                    {isNull() ? (
                                        <TrainingNull />
                                    ) : (
                                        <>
                                            {userInfo.courses.buy.length ? (
                                                <TrainingBuy />
                                            ) : null}
                                        </>
                                    )}
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
