import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../assets/images/logo-aryan.svg";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-logo">
                        <img
                            src={Logo}
                            alt="arenavitch"
                            className="header-logo__image"
                        />
                    </div>

                    <Link to="/go/login" className="header__link">
                        Login →
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
