import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {CoursePageToolsItem} from "../../";

const CoursePageTools: React.FC = () => {
    const {
        courseByUrl: {tools},
    } = useTypedSelector(({courses}) => courses);

    return (
        <div className="course-page-tools">
            <h2 className="course-page__title course-page-tools__title">
                What is required for the course?
            </h2>

            <ul className="course-page-tools-list">
                {tools.map((item, index) => (
                    <CoursePageToolsItem
                        {...item}
                        key={`course-page-tool-${index}`}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CoursePageTools;
