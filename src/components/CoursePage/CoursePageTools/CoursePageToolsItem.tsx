import React from "react";

import {CourseGoodTool} from "../../../models/Course/ICourseGood";

const CoursePageToolsItem: React.FC<CourseGoodTool> = ({title}) => {
    return (
        <li className="course-page-tools-list__item">
            <p>{title}</p>
        </li>
    );
};

export default CoursePageToolsItem;
