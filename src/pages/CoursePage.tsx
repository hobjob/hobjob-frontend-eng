import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {Link, Navigate, useSearchParams, useParams} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchCourseByUrl} from "../redux/actions/courses";
import {addUserCourse, hiddenUserCourse} from "../redux/actions/user";

import {
    CoursePageMain,
    CoursePageLessons,
    CoursePageMaterials,
    CoursePageSkills,
    CoursePageUseSkills,
    CoursePagePassing,
    CoursePageTools,
    CoursePageMaster,
    CoursePageFaq,
    Loader,
} from "../components";

const CoursePage: React.FC = () => {
    const [search] = useSearchParams();
    const {url} = useParams();

    const dispatch = useDispatch();

    const {itemByUrl, isLoadedCourseByUrl} = useTypedSelector(
        ({courses}) => courses
    );
    const categories = useTypedSelector(({categories}) => categories.items);
    const isLoadedCategories = useTypedSelector(
        ({categories}) => categories.isLoadedAllCategories
    );
    const masters = useTypedSelector(({masters}) => masters.items);
    const isLoadedMasters = useTypedSelector(({masters}) => masters.isLoaded);
    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);

    const [visibleButton, setVisibleButton] = React.useState(false);

    const [isLogin, setIsLogin] = React.useState(false);
    const [isAdd, setIsAdd] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", handlerScroll);

        const ref = search.get("ref");

        if (ref) {
            localStorage.setItem("ref", ref);
        }
    }, []);

    React.useEffect(() => {
        return () => {
            window.removeEventListener("scroll", handlerScroll);
        };
    }, []);

    React.useEffect(() => {
        dispatch(fetchCourseByUrl(url ? url : ""));
    }, [url]);

    React.useEffect(() => {
        if (
            localStorage.getItem("accessToken") &&
            isLoadedUserInfo &&
            isLoadedCourseByUrl
        ) {
            setIsLogin(true);

            if (userInfo.courses && userInfo.courses[itemByUrl._id]) {
                setIsAdd(true);
            }
        }
    }, [url, isLoadedUserInfo, isLoadedCourseByUrl]);

    const handlerScroll = () => {
        if (Math.floor(window.pageYOffset) > 200) {
            setVisibleButton(true);
        } else {
            setVisibleButton(false);
        }
    };

    const onClickAddCourse = () => {
        dispatch(addUserCourse(itemByUrl._id, "/go/training"));
    };

    const onClickHiddenCourse = () => {
        dispatch(hiddenUserCourse(itemByUrl._id));
    };

    return (
        <>
            {isLoadedCourseByUrl && isLoadedMasters && isLoadedCategories ? (
                itemByUrl._id !== "" ? (
                    <>
                        <Helmet>
                            <title>{itemByUrl.title}</title>
                        </Helmet>

                        {isLogin ? (
                            <Link
                                to="/go/training"
                                className={`btn-small-round-delete course-page__btn ${
                                    visibleButton ? "active" : ""
                                }`}
                            >
                                Go to my training
                            </Link>
                        ) : (
                            <Link
                                to="/go/register"
                                className={`btn-small-round course-page__btn ${
                                    visibleButton ? "active" : ""
                                }`}
                            >
                                Buy for <span>{itemByUrl.oldPrice}₹</span>{" "}
                                {itemByUrl.price}₹
                            </Link>
                        )}

                        <CoursePageMain
                            {...itemByUrl}
                            isLogin={isLogin}
                            master={masters[itemByUrl.masterId]}
                            categories={categories}
                        />

                        <CoursePageLessons
                            {...itemByUrl}
                            onClickAddCourse={onClickAddCourse}
                            isLogin={isLogin}
                        />

                        {itemByUrl.materials.length ? (
                            <CoursePageMaterials
                                {...itemByUrl}
                                onClickAddCourse={onClickAddCourse}
                                isLogin={isLogin}
                                isAdd={isAdd}
                            />
                        ) : null}

                        <CoursePageSkills {...itemByUrl} />

                        <CoursePageUseSkills {...itemByUrl} />

                        <CoursePagePassing />

                        <CoursePageTools {...itemByUrl} />

                        <CoursePageMaster
                            master={masters[itemByUrl.masterId]}
                        />

                        <CoursePageFaq />
                    </>
                ) : (
                    <Navigate to="/course" />
                )
            ) : (
                <Loader />
            )}
        </>
    );
};

export default CoursePage;
