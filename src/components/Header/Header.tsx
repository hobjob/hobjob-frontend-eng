import React from "react";
import {Link} from "react-router-dom";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import Logo from "../../assets/images/logo-aryan.svg";

const Header: React.FC = () => {
    const {userInfo} = useTypedSelector(({user}) => user);

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

                    {userInfo._id !== "" ? (
                        <Link to="/go/training" className="header__link">
                            Training →
                        </Link>
                    ) : (
                        <Link to="/go/login" className="header__link">
                            Login →
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
