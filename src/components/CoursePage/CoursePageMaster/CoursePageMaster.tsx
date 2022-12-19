import React from "react";
import {Link} from "react-router-dom";

import {Master} from "../../../models/IMaster";

interface CoursePageMasterProps {
    master: Master;
}

const CoursePageMaster: React.FC<CoursePageMasterProps> = ({master}) => {
    return (
        <>
            <section className="course-page-master">
                <div className="container">
                    <div className="course-page-master-wrapper">
                        <div
                            className="course-page-master-img"
                            style={{
                                backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${master.avatar.size_768}')`,
                            }}
                        ></div>
                        <div className="course-page-master-text">
                            <h2 className="course-page-master__title">
                                About the master
                            </h2>
                            {master ? (
                                <p className="description course-page-master__description">
                                    {master.masterDescription}
                                </p>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CoursePageMaster;
