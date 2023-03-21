import React from "react";

import {TrainingBuyBlock} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {checkDeclension} from "../../../functions/checkDeclension";

const TrainingSubscribe: React.FC = () => {
    const {userInfo} = useTypedSelector(({user}) => user);

    return (
        <div className="training-section-wrapper">
            <div className="training-section">
                <h3 className="title__mb training-section__title">Курсы</h3>

                {userInfo.courses.buy.map((course, index) => (
                    <TrainingBuyBlock
                        {...course}
                        master={"123"}
                        completedLessonsTitle1={
                            checkDeclension(course.completedLessons.length, [
                                "Passed",
                                "Passed",
                                "Passed",
                            ]).text
                        }
                        completedLessonsTitle2={
                            checkDeclension(course.completedLessons.length, [
                                "lesson",
                                "lesson",
                                "lessons",
                            ]).title
                        }
                        key={`training-section-block-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TrainingSubscribe;
