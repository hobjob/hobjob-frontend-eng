import React from "react";
import {Link} from "react-router-dom";

import {CourseGood} from "../../../models/ICourseGood";
import {Category} from "../../../models/ICategory";
import {Master} from "../../../models/IMaster";

interface CoursePageMainProps extends CourseGood {
    categories: {[key: string]: Category};
    master: Master;
    isLogin: boolean;
}

const CoursePageMain: React.FC<CoursePageMainProps> = ({
    category,
    title,
    description,
    master,
    categories,
    image,
    isLogin,
    price,
    oldPrice,
}) => {
    return (
        <section className="course-page-main">
            <div className="container">
                <div className="course-page-main-wrapper">
                    <div className="course-page-main-text">
                        <div className="course-page-main-text-subinfo">
                            {categories[category] ? (
                                <a
                                    href={`/course/?categories=${categories[category].transfer}`}
                                    className="category course-page-main-text-subinfo__category"
                                >
                                    {categories[category].title}
                                </a>
                            ) : null}
                        </div>
                        <h2 className="course-page-main-text__title">
                            {title}
                        </h2>
                        <p className="description course-page-main-text__description">
                            {description}
                        </p>

                        {master ? (
                            <a
                                href={master.socials.inst}
                                className="course-page-main-text-master"
                            >
                                <div
                                    className="course-page-main-text-master-avatar"
                                    style={{
                                        backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${master.avatar.size_512}')`,
                                    }}
                                ></div>
                                <h4 className="course-page-main-text-master__name">
                                    {master ? (
                                        <>
                                            {master.name} {master.surname}
                                        </>
                                    ) : null}
                                </h4>
                            </a>
                        ) : null}

                        {isLogin ? (
                            <Link
                                to="/go/training"
                                className="btn course-page-main-text__btn"
                            >
                                Go to my training
                            </Link>
                        ) : (
                            <Link
                                to="/go/register"
                                className="btn course-page-main-text__btn"
                            >
                                Buy for <span>{oldPrice}₹</span> {price}₹
                            </Link>
                        )}
                    </div>
                    <div
                        className="course-page-main-image"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_1536}")`,
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageMain;
