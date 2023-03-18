import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {CoursePageSkillsItem} from "../../";

const CoursePageSkills: React.FC = () => {
    const {
        courseByUrl: {skills},
    } = useTypedSelector(({courses}) => courses);

    return (
        <div className="course-page-skills">
            <h2 className="course-page__title course-page-skills__title">
                You will learn:
            </h2>

            <div className="course-page-skills-items-wrapper">
                {skills.map((item, index) => (
                    <CoursePageSkillsItem
                        {...item}
                        key={`course-page-skills-item-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoursePageSkills;
