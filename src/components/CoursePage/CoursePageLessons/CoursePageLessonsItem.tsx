import React from "react";
import {Link} from "react-router-dom";

import {CourseGoodLessons} from "../../../models/ICourseGood";

interface CoursePageLessonsItemProps extends CourseGoodLessons {
    num: number;
    courseId: string;

    openVideoPlaecholder: () => void;
    closeVideoPlaecholder: () => void;
    onClickAddCourse: (Navigate: string) => void;

    isLogin: boolean;
}

const CoursePageLessonsItem: React.FC<CoursePageLessonsItemProps> = ({
    num,
    courseId,
    title,
    description,
    isLogin,

    openVideoPlaecholder,
    closeVideoPlaecholder,
    onClickAddCourse,
}) => {
    return (
        <>
            {isLogin ? (
                <Link
                    to={`/go/passing/${courseId}/${num}`}
                    className="course-page-lessons-list-item"
                >
                    <div className="course-page-lessons-list-item-top">
                        <h4 className="course-page-lessons-list-item-top__title">
                            <span>{num}.</span>
                            {title}
                        </h4>
                    </div>

                    {description ? (
                        <p className="course-page-lessons-list-item__description">
                            {description}
                        </p>
                    ) : null}
                </Link>
            ) : (
                <div
                    className="course-page-lessons-list-item"
                    onClick={
                        num === 1 ? closeVideoPlaecholder : openVideoPlaecholder
                    }
                >
                    <div className="course-page-lessons-list-item-top">
                        <h4 className="course-page-lessons-list-item-top__title">
                            <span>{num}.</span>
                            {title}
                        </h4>
                    </div>
                    {description ? (
                        <p className="course-page-lessons-list-item__description">
                            {description}
                        </p>
                    ) : null}
                </div>
            )}
        </>
    );
};

export default CoursePageLessonsItem;
