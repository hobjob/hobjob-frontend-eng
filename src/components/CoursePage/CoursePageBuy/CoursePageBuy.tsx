import React from "react";

import CoursePageBuyImage from "../../../assets/images/course-page-buy-image.jpg";
import Burger from "../../../assets/images/burger.png";
import Love from "../../../assets/images/love.png";

const CoursePageBuy: React.FC = () => {
    return (
        <div className="course-page-buy" id="price">
            <div className="course-page-buy-text">
                <h2 className="course-page__title course-page-buy-text__title">
                    How to access the course?
                </h2>
                <div className="course-page-buy-text-description">
                    <p className="course-page-buy-text-description__description">
                        1. Scan the QR code for my UPI (
                        <span>aryan.uzumaki@oksbi</span>) <br /> and transfer{" "}
                        <span>199₹</span> That's less than a burger{" "}
                        <img src={Burger} alt="" />
                    </p>

                    <p className="course-page-buy-text-description__description">
                        2. After you make your payment, DM me (
                        <a href="https://www.instagram.com/arenavitch">
                            @arenavitch
                        </a>
                        ) on IG with the screenshot of the payment, and your
                        email. I'll confirm your details and you'll receive an
                        account and access to the course!
                    </p>

                    <p className="course-page-buy-text-description__description">
                        3. Once the payment is confirmed, I'll respond
                        immediately with your username and password. And some
                        love <img src={Love} alt="" />
                    </p>

                    {/* <p className="course-page-buy-text-description__description">
                        Если вы с телефона вот мой UPI{" "}
                        <span>aryan.uzumaki@oksbi</span>
                    </p> */}
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
