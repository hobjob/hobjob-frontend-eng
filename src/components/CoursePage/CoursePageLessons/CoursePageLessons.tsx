import React from "react";
import {Link as LinkScroll} from "react-scroll";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {CoursePageLessonsVideo, CoursePageLessonsItem} from "../../";

const CoursePageLessons: React.FC = () => {
    const {
        courseByUrl: {_id, lessons},
    } = useTypedSelector(({courses}) => courses);

    const [videoPlaecholder, setVideoPlaecholder] =
        React.useState<boolean>(false);
    const [videoPlaecholderAnimateClose, setVideoPlaecholderAnimateClose] =
        React.useState<boolean>(false);

    const openVideoPlaecholder = () => {
        setVideoPlaecholder(true);
    };

    const closeVideoPlaecholder = () => {
        setVideoPlaecholderAnimateClose(true);

        setTimeout(() => {
            setVideoPlaecholderAnimateClose(false);
            setVideoPlaecholder(false);
        }, 180);
    };

    return (
        <section className="course-page-lessons">
            <div className="container">
                <div className="course-page-lessons-wrapper">
                    <div
                        className={`course-page-lessons-video ${
                            videoPlaecholder ? "disabled" : ""
                        }`}
                    >
                        {videoPlaecholder ? (
                            <div
                                className={`course-page-lessons-video-plaecholder ${
                                    videoPlaecholderAnimateClose ? "close" : ""
                                }`}
                            >
                                <p className="course-page-lessons-video-plaecholder__description">
                                    To continue viewing other lessons, buy this
                                    course
                                </p>
                                <LinkScroll
                                    to="price"
                                    spy={true}
                                    smooth={true}
                                    offset={-125}
                                    duration={1000}
                                    className="course-page-lessons-video-plaecholder__link"
                                >
                                    Start learning
                                </LinkScroll>
                            </div>
                        ) : null}

                        <CoursePageLessonsVideo
                            courseId={_id}
                            image={lessons[0].image}
                            videoPlaecholder={videoPlaecholder}
                        />
                    </div>
                    <div className="course-page-lessons-list">
                        <h2 className="course-page-lessons-list__title">
                            Lessons in this course
                        </h2>

                        <div className="course-page-lessons-list-item-shadow"></div>

                        <div className="course-page-lessons-list-item-wrapper">
                            {lessons.map((lesson, index) => (
                                <CoursePageLessonsItem
                                    key={`course-page-lessons-list-item-${index}`}
                                    num={index + 1}
                                    openVideoPlaecholder={openVideoPlaecholder}
                                    closeVideoPlaecholder={
                                        closeVideoPlaecholder
                                    }
                                    {...lesson}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageLessons;
