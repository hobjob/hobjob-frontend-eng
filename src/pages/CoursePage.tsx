import React from "react";
import {useDispatch} from "react-redux";
import {useSearchParams, useParams} from "react-router-dom";
import {Link} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchCourseByUrl} from "../redux/actions/courses";

import {
    CoursePageMain,
    CoursePageLessons,
    CoursePageSkills,
    CoursePageUseSkills,
    CoursePagePassing,
    CoursePageTools,
    CoursePageFaq,
    Loader,
} from "../components/";

const CoursePage: React.FC = () => {
    const [search] = useSearchParams();
    const {url} = useParams();

    const dispatch = useDispatch();

    const {isLoadedCourseByUrl} = useTypedSelector(({courses}) => courses);

    const [visibleButton, setVisibleButton] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", handlerScroll);
    }, []);

    React.useEffect(() => {
        return () => {
            window.removeEventListener("scroll", handlerScroll);
        };
    }, []);

    React.useEffect(() => {
        dispatch(fetchCourseByUrl(url ? url : ""));
    }, [url]);

    const handlerScroll = () => {
        if (Math.floor(window.pageYOffset) > 200) {
            setVisibleButton(true);
        } else {
            setVisibleButton(false);
        }
    };

    return (
        <>
            {isLoadedCourseByUrl ? (
                <section className="course-page">
                    <div className="container">
                        <div className="course-page-wrapper">
                            <Link
                                to="/go/register"
                                className={`course-page__btn small course-page-fixed__btn ${
                                    visibleButton ? "visible" : ""
                                }`}
                            >
                                Buy this course for<span>₹499</span> ₹199
                            </Link>

                            <CoursePageMain />

                            <CoursePageLessons />

                            <CoursePageSkills />

                            <CoursePageUseSkills />

                            <CoursePagePassing />

                            <CoursePageTools />

                            <CoursePageFaq />
                        </div>
                    </div>
                </section>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default CoursePage;
