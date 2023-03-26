import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {TrainingPaymentUploadScreenshot} from "../../";

import PaymentImage from "../../../assets/images/training-payment-image.jpg";
import Burger from "../../../assets/images/burger.png";
import Love from "../../../assets/images/love.png";

const TrainingPayment: React.FC = () => {
    const {userInfo} = useTypedSelector(({user}) => user);

    return (
        <div className="training-payment">
            <div className="training-payment-text">
                <div className="reglog-form-progress">
                    <p className="reglog-form-progress__item">1. Register</p>
                    <p className="reglog-form-progress__item active">
                        2. Payment
                    </p>
                    <p className="reglog-form-progress__item">3. New Skill</p>
                </div>

                {userInfo.screenshot !== "" ? (
                    <h2 className="course-page__title training-payment-text__title">
                        Thank you!
                    </h2>
                ) : (
                    <h2 className="course-page__title training-payment-text__title">
                        Hello! How to access the course?
                    </h2>
                )}

                <div className="training-payment-text-description">
                    {userInfo.screenshot !== "" ? (
                        <p className="training-payment-text-description__description">
                            <span>
                                Please hold on while we confirm your payment!
                                You will receive an email with the link to
                                the course shortly
                            </span>{" "}
                            <img src={Love} alt="" />
                        </p>
                    ) : (
                        <>
                            <p className="training-payment-text-description__description">
                                1. Payment of <span>₹199</span> - You can either
                                scan the QR code or send it to my UPI (
                                <span>aryan.uzumaki@okaxis</span>). That's less
                                than the price of a burger{" "}
                                <img src={Burger} alt="" />
                            </p>
                            <p className="training-payment-text-description__description">
                                2. Take a screenshot of your transfer and upload
                                it! You will receive a confirmation email within
                                a couple hours at most. (Please do remember to
                                check your spam and promotions in case you do
                                not see it.) <img src={Love} alt="" />
                            </p>
                        </>
                    )}
                </div>

                <TrainingPaymentUploadScreenshot />
            </div>
            <img
                src={PaymentImage}
                alt=""
                className="training-payment__image"
            />
        </div>
    );
};

export default TrainingPayment;
