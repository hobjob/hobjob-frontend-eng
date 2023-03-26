import React from "react";
import {Link} from "react-router-dom";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import CoursePageMainText from "../../../assets/images/course-page-main-text.svg";

const CoursePageMain: React.FC = () => {
    const {
        courseByUrl: {title, description, oldPrice, price},
    } = useTypedSelector(({courses}) => courses);

    return (
        <div className="course-page-main">
            <div className="course-page-main-text">
                <h1 className="course-page-main-text__title">{title}</h1>

                <div className="course-page-main-text-description">
                    <p className="course-page-main-text-description__description">
                        {description}
                    </p>
                    <Link
                        to="/go/register"
                        className="course-page__btn course-page-main-text-description__btn"
                    >
                        Buy this course for <span>₹{oldPrice}</span> ₹{price}
                    </Link>
                    <img
                        src={CoursePageMainText}
                        alt=""
                        className="course-page-main-text-description__btnimage"
                    />
                </div>
            </div>
        </div>
    );
};

export default CoursePageMain;
