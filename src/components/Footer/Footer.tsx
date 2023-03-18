import React from "react";

import LogoNagibin from "../../assets/images/nagibin-dev.svg";
import Logo from "../../assets/images/logo-aryan.svg";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-logos">
                        {/* Hi, we are Nagibin's studio */}
                        <div className="nagibinstudio">
                            <img
                                src={LogoNagibin}
                                alt=""
                                className="nagibinstudio__img"
                                style={{
                                    width: "350px",
                                    userSelect: "none",
                                }}
                            />
                        </div>

                        <div className="footer-logos-item">
                            <img
                                src={Logo}
                                alt="arenavitch"
                                className="footer-logos-item__image"
                            />
                        </div>
                    </div>
                    <a
                        href="mailto:aryan.uzumaki@gmail.com"
                        className="footer__link"
                    >
                        <span>Support:</span> aryan.uzumaki@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
