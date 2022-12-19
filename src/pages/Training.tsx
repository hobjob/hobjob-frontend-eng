import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {Navigate} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {checkDeclension} from "../Functions/checkDeclension";

import {fetchUserCourses, hiddenUserCourse} from "../redux/actions/user";

import {Loader, TrainingBlock} from "../components/";

const Training: React.FC = () => {
    const dispatch = useDispatch();

    const {userInfo, courses, isLoadedUserInfo, isLoadedUserCourses} =
        useTypedSelector(({user}) => user);
    const masters = useTypedSelector(({masters}) => masters.items);
    const isLoadedMasters = useTypedSelector(({masters}) => masters.isLoaded);

    React.useEffect(() => {
        if (!Object.keys(courses).length && isLoadedUserInfo) {
            dispatch(fetchUserCourses());
        }
    }, [isLoadedUserInfo]);

    const onClickHiddenUserCourse = (courseId: string) => {
        dispatch(hiddenUserCourse(courseId));
    };

    return (
        <>
            <Helmet>
                <title>My training</title>
            </Helmet>

            {localStorage.getItem("accessToken") ? (
                isLoadedUserInfo && isLoadedUserCourses && isLoadedMasters ? (
                    <>
                        <section className="training">
                            <div className="container">
                                <div className="training-wrapper">
                                    {Object.keys(courses).length ? (
                                        <>
                                            <h2 className="title training__title">
                                                Мое обучение
                                                <span>
                                                    (
                                                    {
                                                        Object.keys(courses)
                                                            .length
                                                    }
                                                    )
                                                </span>
                                            </h2>
                                            <div className="training-block-wrapper">
                                                {Object.keys(courses).map(
                                                    (key, index) => (
                                                        <TrainingBlock
                                                            {...courses[key]}
                                                            completedLessonsTitle={
                                                                checkDeclension(
                                                                    courses[key]
                                                                        .completedLessons
                                                                        .length,
                                                                    [
                                                                        "урок",
                                                                        "урока",
                                                                        "уроков",
                                                                    ]
                                                                ).title
                                                            }
                                                            master={
                                                                masters[
                                                                    courses[key]
                                                                        .masterId
                                                                ]
                                                            }
                                                            onClickHiddenUserCourse={
                                                                onClickHiddenUserCourse
                                                            }
                                                            key={`training-block-${index}`}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </>
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
