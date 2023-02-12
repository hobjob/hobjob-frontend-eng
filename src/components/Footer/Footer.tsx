import React from "react";
import {NavLink} from "react-router-dom";

import LogoNagibin from "../../assets/images/nagibin-develompent.svg";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-block">
                        <div className="footer-block-logos">
                            {/* Hi, we are Nagibin's studio */}
                            <div className="nagibinstudio">
                                <img
                                    src={LogoNagibin}
                                    alt=""
                                    className="nagibinstudio__img"
                                    style={{
                                        width: "300px",
                                        userSelect: "none",
                                    }}
                                />
                            </div>
                        </div>

                        <div className="footer-block-contact">
                            <div className="footer-block-contact-email-wrapper">
                                <a
                                    href="mailto:support@hobjob.ru"
                                    className="footer-block-contact-email"
                                >
                                    <span className="subtitle footer-block-contact-email__subtitle">
                                        Support
                                    </span>
                                    <span className="footer-block-contact-email__email">
                                        support@hobjob.ru
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-block footer-block-subinfo">
                        <div className="footer-block-subinfo-block">
                            <span className="footer-block-subinfo-block__span">
                                © Aryan D. Nair {new Date().getFullYear()}
                            </span>
                        </div>
                        <div className="footer-block-subinfo-block">
                            <NavLink
                                to="/policy"
                                className={({isActive}) =>
                                    `footer-block-subinfo-block__link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                Policy
                            </NavLink>
                            <NavLink
                                to="/public-offer"
                                className={({isActive}) =>
                                    `footer-block-subinfo-block__link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                Public offer
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
