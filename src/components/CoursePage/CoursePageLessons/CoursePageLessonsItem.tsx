import React from "react";

import {CourseGoodLessons} from "../../../models/Course/ICourseGood";

interface CoursePageLessonsItemProps extends CourseGoodLessons {
    num: number;

    openVideoPlaecholder: () => void;
    closeVideoPlaecholder: () => void;
}

const CoursePageLessonsItem: React.FC<CoursePageLessonsItemProps> = ({
    num,
    title,
    description,

    openVideoPlaecholder,
    closeVideoPlaecholder,
}) => {
    return (
        <div
            className="course-page-lessons-list-item"
            onClick={num === 1 ? closeVideoPlaecholder : openVideoPlaecholder}
        >
            <h4 className="course-page-lessons-list-item__title">{title}</h4>
            {description ? (
                <p className="course-page-lessons-list-item__description">
                    {description}
                </p>
            ) : null}
        </div>
    );
};

export default CoursePageLessonsItem;
