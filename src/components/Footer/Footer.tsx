import React from "react";
import {NavLink} from "react-router-dom";

import LogoAryan from "../../assets/images/logo-aryan.svg";
import LogoNagibin from "../../assets/images/nagibin-develompent.svg";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-block">
                        <div className="footer-block-logos">
                            <a
                                href="https://www.instagram.com/arenavitch/"
                                className="footer-block-logos-logo"
                            >
                                <img
                                    src={LogoAryan}
                                    alt=""
                                    className="footer-block-logos-logo__image"
                                />
                            </a>

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

                    <nav className="footer-nav">
                        <NavLink
                            to="/go/login"
                            className={({isActive}) =>
                                `footer-nav__link ${isActive ? "active" : ""}`
                            }
                        >
                            Login
                        </NavLink>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
