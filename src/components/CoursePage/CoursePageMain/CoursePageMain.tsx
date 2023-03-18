import React from "react";
import {Link as LinkScroll} from "react-scroll";

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
                    <LinkScroll
                        to="price"
                        spy={true}
                        smooth={true}
                        offset={-125}
                        duration={1000}
                        className="course-page__btn course-page-main-text-description__btn"
                    >
                        Buy a course for <span>{oldPrice}₹</span> {price}₹
                    </LinkScroll>
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
