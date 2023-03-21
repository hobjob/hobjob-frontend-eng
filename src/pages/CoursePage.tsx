import React from "react";
import {useDispatch} from "react-redux";
import {useSearchParams, useParams} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchCourseByUrl} from "../redux/actions/courses";

import {
    CoursePageMain,
    CoursePageLessons,
    CoursePageSkills,
    CoursePageUseSkills,
    CoursePageBuy,
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
                            <LinkScroll
                                to="price"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                className={`course-page__btn small course-page-fixed__btn ${
                                    visibleButton ? "visible" : ""
                                }`}
                            >
                                Buy this course for<span>499₹</span> 199₹
                            </LinkScroll>

                            <CoursePageMain />

                            <CoursePageLessons />

                            <CoursePageSkills />

                            <CoursePageUseSkills />

                            <CoursePageBuy />

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
