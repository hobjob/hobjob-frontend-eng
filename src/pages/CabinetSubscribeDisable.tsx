import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import moment from "moment";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchUpdateUser} from "../redux/actions/user";

import {checkDeclension} from "../functions/checkDeclension";

const CabinetSubscribeDisable: React.FC = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const [daysSubscribe, setDaysSubscribe] = React.useState(0);

    const {
        userInfo: {subscribe},
        isLoadedUserInfo,
    } = useTypedSelector(({user}) => user);

    React.useEffect(() => {
        if (isLoadedUserInfo) {
            var a = moment();
            var b = moment(
                subscribe.registrationSubscribe,
                "DD.MM.YYYY, HH:mm"
            ).add(subscribe.periodInfo.count, subscribe.periodInfo.title);

            setDaysSubscribe(b.diff(a, "days"));
        }
    }, [isLoadedUserInfo]);

    const changeAutoPayment = () => {
		dispatch(fetchUpdateUser({ autoPayment: !subscribe.auto }));
		
        history("/go/cabinet#subscribe");
    };

    return (
        <section className="cabinet-subscribe-disable">
            <div className="container">
                <div className="cabinet-subscribe-disable-wrapper">
                    <div className="cabinet-subscribe-disable-text">
                        <h2 className="title cabinet-subscribe-disable-text__title">
                            Так скоро?
                        </h2>
                        <p className="description cabinet-subscribe-disable-text__description">
                            Отменив подписку, вы потеряете доступ ко всем курсам
                            через {daysSubscribe}{" "}
                            {
                                checkDeclension(daysSubscribe, [
                                    "день",
                                    "дня",
                                    "дней",
                                ]).text
                            }
                        </p>
                        <div className="cabinet-subscribe-disable-text-btn">
                            <Link
                                to="/go/training"
                                className="btn cabinet-subscribe-disable-text-btn__btn"
                            >
                                Продолжить обучение
                            </Link>

                            <button
                                className="btn-regular cabinet-subscribe-disable-text-btn__btn"
                                onClick={changeAutoPayment}
                            >
                                Отменить подписку
                            </button>
                        </div>
                    </div>
                    <div className="cabinet-subscribe-disable-image">
                        <img
                            src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/cabinet-subscribe-disable-image.svg`}
                            alt=""
                            className="cabinet-subscribe-disable-image__image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CabinetSubscribeDisable;
