import React from "react";

import {TrainingBuyBlock} from "../../";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {checkDeclension} from "../../../functions/checkDeclension";

const TrainingSubscribe: React.FC = () => {
    const {userInfo} = useTypedSelector(({user}) => user);
    const masters = useTypedSelector(({masters}) => masters.items);

    return (
        <div className="training-section">
            <h3 className="title__mb training-section__title">My training</h3>

            {userInfo.courses.map((course, index) => (
                <TrainingBuyBlock
                    {...course}
                    master={masters[course.masterId]}
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
    );
};

export default TrainingSubscribe;
