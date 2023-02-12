import React from "react";

import {CoursePageSkillsItem} from "../../";

import {CourseGoodSkill} from "../../../models/Course/ICourseGood";

interface CoursePageSkillsProps {
    skills: CourseGoodSkill[];
}

const CoursePageSkills: React.FC<CoursePageSkillsProps> = ({skills}) => {
    return (
        <section className="course-page-skills">
            <div className="container">
                <div className="course-page-skills-wrapper">
                    <h2 className="title__mb course-page-skills__title">
                        You will learn:
                    </h2>

                    <div className="course-page-skills-items-wrapper">
                        {skills.map((skill, index) => (
                            <CoursePageSkillsItem
                                {...skill}
                                key={`course-page-skills-item-${index}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageSkills;
