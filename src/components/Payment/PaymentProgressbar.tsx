import React from "react";

interface PaymentProgressbarProps {
    number: number;
}

const PaymentProgressbar: React.FC<PaymentProgressbarProps> = ({number}) => {
    return (
        <div className="payment-progressbar">
            <div
                className={`payment-progressbar-item ${
                    number === 1 ? "active" : ""
                }`}
            >
                <span className="payment-progressbar-item__number">1</span>
                <span className="payment-progressbar-item__title">
                    Registration
                </span>
            </div>
            <div className="payment-progressbar-line"></div>
            <div
                className={`payment-progressbar-item ${
                    number === 2 ? "active" : ""
                }`}
            >
                <span className="payment-progressbar-item__number">2</span>
                <span className="payment-progressbar-item__title">Payment</span>
            </div>
            <div className="payment-progressbar-line"></div>
            <div
                className={`payment-progressbar-item ${
                    number === 3 ? "active" : ""
                }`}
            >
                <span className="payment-progressbar-item__number">2</span>
                <span className="payment-progressbar-item__title">
                    New skills
                </span>
            </div>
        </div>
    );
};

export default PaymentProgressbar;
