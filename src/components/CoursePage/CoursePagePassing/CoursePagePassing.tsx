import React from "react";

import CoursePagePassingImage from "../../../assets/images/course-page-passing-image.jpg";
import CoursePagePassingImageMedia from "../../../assets/images/course-page-passing-image-media.jpg";

const CoursePagePassing: React.FC = () => {
    return (
        <div className="course-page-passing">
            <h2 className="course-page__title course-page-passing__title">
                Course Trajectory
            </h2>

            <picture>
                <source
                    media="(max-width: 750px)"
                    srcSet={CoursePagePassingImageMedia}
                />

                <img
                    className="course-page-passing__image"
                    alt=""
                    src={CoursePagePassingImage}
                />
            </picture>
        </div>
    );
};

export default CoursePagePassing;
