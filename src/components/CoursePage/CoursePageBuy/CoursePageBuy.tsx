import React from "react";

import CoursePageBuyImage from "../../../assets/images/course-page-buy-image.jpg";

const CoursePageBuy: React.FC = () => {
    return (
        <div className="course-page-buy" id="price">
            <div className="course-page-buy-text">
                <h2 className="course-page__title course-page-buy-text__title">
                    How to access the course?
                </h2>
                <div className="course-page-buy-text-description">
                    <p className="course-page-buy-text-description__description">
                        1. Scan the qr code and translate <span>199₹</span>
                    </p>

                    <p className="course-page-buy-text-description__description">
                        2. After payment, send me a direct{" "}
                        <a href="https://www.instagram.com/arenavitch">
                            @arenavitch
                        </a>{" "}
                        screenshot with the translation and your email to which
                        we will make an account with the course
                    </p>

                    <p className="course-page-buy-text-description__description">
                        3. As soon as we check the payment, I will immediately
                        answer in direct and send you your username and password
                    </p>
                </div>
            </div>
            <img
                src={CoursePageBuyImage}
                alt=""
                className="course-page-buy__image"
            />
        </div>
    );
};

export default CoursePageBuy;
