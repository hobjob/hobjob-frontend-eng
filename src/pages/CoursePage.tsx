import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {Navigate, useSearchParams, useParams} from "react-router-dom";
import {Link} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchCourseByUrl} from "../redux/actions/courses";
import {addUserCourse} from "../redux/actions/user";

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

import {checkIsAddCourse} from "../functions/checkIsAddCourse";

const CoursePage: React.FC = () => {
    const [search] = useSearchParams();
    const {url} = useParams();

    const dispatch = useDispatch();

    const {courseByUrl, isLoadedCourseByUrl} = useTypedSelector(
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

            setIsAdd(checkIsAddCourse(userInfo.courses, courseByUrl._id));
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
        dispatch(addUserCourse(courseByUrl._id));
    };

    return (
        <>
            {isLoadedCourseByUrl && isLoadedMasters && isLoadedCategories ? (
                courseByUrl._id !== "" ? (
                    <>
                        <Helmet>
                            <title>{courseByUrl.title}</title>
                        </Helmet>

                        <Link
                            to={`/go/register?course=${courseByUrl._id}`}
                            className={`btn-small-round course-page__btn ${
                                visibleButton ? "visible" : ""
                            }`}
                        >
                            Buy for <span>{courseByUrl.oldPrice}₹</span>{" "}
                            {courseByUrl.price}₹
                        </Link>

                        <CoursePageMain
                            {...courseByUrl}
                            master={masters[courseByUrl.masterId]}
                            categories={categories}
                        />

                        <CoursePageLessons {...courseByUrl} />

                        {courseByUrl.materials.length ? (
                            <CoursePageMaterials
                                {...courseByUrl}
                                onClickAddCourse={onClickAddCourse}
                                isLogin={isLogin}
                                isAdd={isAdd}
                                isSubscribe={userInfo.subscribe.working}
                            />
                        ) : null}

                        <CoursePageSkills {...courseByUrl} />

                        <CoursePageUseSkills {...courseByUrl} />

                        <CoursePagePassing />

                        <CoursePageTools {...courseByUrl} />

                        <CoursePageMaster
                            master={masters[courseByUrl.masterId]}
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
