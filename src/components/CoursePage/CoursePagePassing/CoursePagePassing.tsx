import React from "react";

import CoursePagePassingImage from "../../../assets/images/course-page-passing-image.jpg";

const CoursePagePassing: React.FC = () => {
    return (
        <div className="course-page-passing">
            <h2 className="course-page__title course-page-passing__title">
                How is the training going?
            </h2>

            <img
                src={CoursePagePassingImage}
                alt=""
                className="course-page-passing__image"
            />
        </div>
    );
};

export default CoursePagePassing;
