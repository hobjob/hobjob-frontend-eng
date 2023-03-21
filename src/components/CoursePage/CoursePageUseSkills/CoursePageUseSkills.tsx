import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {CoursePageUseSkillsItem} from "../../";

import CoursePageUseSkillsImage from "../../../assets/images/course-page-use-skills-image.jpg";

const CoursePageUseSkills: React.FC = () => {
    const {
        courseByUrl: {useSkills},
    } = useTypedSelector(({courses}) => courses);

    return (
        <div className="course-page-use-skills">
            <h2 className="course-page__title course-page-use-skills__title">
                By the end of the course you will be able to:
            </h2>
            <div className="course-page-use-skills-items-wrapper">
                {useSkills.map((item, index) => (
                    <CoursePageUseSkillsItem
                        {...item}
                        key={`course-page-use-skills-item-${index}`}
                    />
                ))}
			</div>
			
            <img
                src={CoursePageUseSkillsImage}
                alt=""
                className="course-page-use-skills__image"
            />
        </div>
    );
};

export default CoursePageUseSkills;
