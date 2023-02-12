import React from "react";
import {Link, NavLink} from "react-router-dom";

interface HeaderModalMenuProps {
    HeaderModalMenuRef: React.RefObject<HTMLDivElement>;
    modalMenuAnimationState: boolean;
    isLogin: boolean;
    userAvatar: string;

    closeModalMenu: () => void;
    clickLogout: () => void;
}

const HeaderModalMenu: React.FC<HeaderModalMenuProps> = ({
    HeaderModalMenuRef,
    modalMenuAnimationState,
    closeModalMenu,
    clickLogout,
    isLogin,
    userAvatar,
}) => {
    return (
        <div
            className={`header-modal-menu-wrapper ${
                modalMenuAnimationState ? "hidden" : ""
            }`}
            ref={HeaderModalMenuRef}
        >
            <div className="header-modal-menu-content">
                <nav className="header-modal-menu-nav">
                    <div className="header-modal-menu-nav-block-main">
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                `header-modal-menu-nav-block-main__link ${
                                    isActive ? "active" : ""
                                }`
                            }
                            onClick={closeModalMenu}
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            to="/course"
                            className={({isActive}) =>
                                `header-modal-menu-nav-block-main__link ${
                                    isActive ? "active" : ""
                                }`
                            }
                            onClick={closeModalMenu}
                        >
                            Курсы
                        </NavLink>
                        <NavLink
                            to="/magazine"
                            className={({isActive}) =>
                                `header-modal-menu-nav-block-main__link ${
                                    isActive ? "active" : ""
                                }`
                            }
                            onClick={closeModalMenu}
                        >
                            Журнал
                        </NavLink>

                        <a
                            href={`${process.env.REACT_APP_DOMEN_MASTERS_SERVICES}`}
                            className="header-modal-menu-nav-block-main__link"
                            onClick={closeModalMenu}
                        >
                            Выложить курс
                        </a>
                    </div>

                    <div className="header-modal-menu-nav-block-user">
                        {isLogin ? (
                            <>
                                <NavLink
                                    to="/go/training"
                                    className={({isActive}) =>
                                        `header-modal-menu-nav-block-user__link ${
                                            isActive ? "active" : ""
                                        }`
                                    }
                                    onClick={closeModalMenu}
                                >
                                    Мое обучение
                                </NavLink>
                                <NavLink
                                    to="/go/cabinet"
                                    className={({isActive}) =>
                                        `header-modal-menu-nav-block-user__link ${
                                            isActive ? "active" : ""
                                        }`
                                    }
                                    onClick={closeModalMenu}
                                >
                                    Мой профиль
                                    <div
                                        className="header-modal-menu-nav-block-user__link-image"
                                        style={{
                                            backgroundImage: `url("${userAvatar}")`,
                                        }}
                                    ></div>
                                </NavLink>
                                <NavLink
                                    to="/go/referrals"
                                    className={({isActive}) =>
                                        `header-modal-menu-nav-block-user__link ${
                                            isActive ? "active" : ""
                                        }`
                                    }
                                    onClick={closeModalMenu}
                                >
                                    Пригласи друга
                                </NavLink>
                                <a
                                    href="/"
                                    onClick={clickLogout}
                                    className="header-modal-menu-nav-block-user__link"
                                >
                                    Выйти
                                </a>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/go/login"
                                    className="header-modal-menu-nav-block-user__link"
                                    onClick={closeModalMenu}
                                >
                                    Войти
                                </Link>
                                <Link
                                    to="/go/register"
                                    className="header-modal-menu-nav-block-user__link"
                                    onClick={closeModalMenu}
                                >
                                    Зарегистрироваться
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default HeaderModalMenu;
