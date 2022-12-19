import React from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import {compose} from "redux";

import {Header, Footer} from "./components/";

import {
    CoursePage,
    Login,
    PasswordRecoveryEmail,
    PasswordRecoveryNewPassword,
    Training,
    PassingCourse,
    Cabinet,
    Register,
    PaymentSubscribe,
    PaymentStatus,
    PaymentError,
    Policy,
    PublicOffer,
    Regulations,
    EngineeringWorks,
} from "./pages/";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        YooMoneyCheckoutWidget?: any;
    }
}

const App: React.FC = () => {
    const {pathname} = useLocation();

    React.useEffect(() => {
        let cords: any = ["scrollX", "scrollY"];

        // Перед закрытием записываем в локалсторадж window.scrollX и window.scrollY как scrollX и scrollY
        window.addEventListener("unload", (e) =>
            cords.forEach((cord: any) => (localStorage[cord] = window[cord]))
        );

        // Прокручиваем страницу к scrollX и scrollY из localStorage (либо 0,0 если там еще ничего нет)
        window.scroll(...cords.map((cord: any) => localStorage[cord]));
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {false ? (
                <EngineeringWorks />
            ) : (
                <div className="wrapper">
                    {pathname.indexOf("/payment") !== -1 ||
                    pathname.indexOf("/login") !== -1 ||
                    pathname.indexOf("/register") !== -1 ||
                    pathname === "/go/password-recovery" ||
                    pathname.indexOf("/go/password-recovery") !== -1 ? null : (
                        <Header />
                    )}

                    <React.Suspense fallback={<></>}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/go/login" />} />

                            <Route
                                path="/course/:url"
                                element={<CoursePage />}
                            />

                            <Route
                                path="/payment/subscribe/:number"
                                element={<PaymentSubscribe />}
                            />

                            <Route
                                path="/payment/status/:number"
                                element={<PaymentStatus />}
                            />

                            <Route
                                path="/payment/error"
                                element={<PaymentError />}
                            />

                            <Route path="/policy" element={<Policy />} />

                            <Route
                                path="/public-offer"
                                element={<PublicOffer />}
                            />
                            <Route
                                path="/regulations"
                                element={<Regulations />}
                            />

                            <Route path="/go/login" element={<Login />} />

                            <Route path="/go/register" element={<Register />} />

                            <Route
                                path="/go/password-recovery"
                                element={<PasswordRecoveryEmail />}
                            />

                            <Route
                                path="/go/password-recovery/:hash"
                                element={<PasswordRecoveryNewPassword />}
                            />

                            <Route path="/go/training" element={<Training />} />

                            <Route
                                path="/go/passing/:id/:num"
                                element={<PassingCourse />}
                            />

                            <Route path="/go/cabinet" element={<Cabinet />} />

                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </React.Suspense>

                    {pathname.indexOf("/payment") !== -1 ||
                    pathname.indexOf("/login") !== -1 ||
                    pathname.indexOf("/register") !== -1 ||
                    pathname === "/go/password-recovery" ||
                    pathname.indexOf("/go/password-recovery") !== -1 ? null : (
                        <Footer />
                    )}
                </div>
            )}
        </>
    );
};

export default App;
