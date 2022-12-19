import React from "react";
import {Link} from "react-router-dom";

import {CoursePassing} from "../../models/ICoursePassing";
import {Master} from "../../models/IMaster";

interface TrainingBlockProps extends CoursePassing {
    completedLessonsTitle: string;
    master: Master;

    onClickHiddenUserCourse: (_id: string) => void;
}

const TrainingBlock: React.FC<TrainingBlockProps> = ({
    _id,
    image,
    title,
    lessons,
    completedLessonsTitle,
    master,
    onClickHiddenUserCourse,
}) => {
    return (
        <div className="training-block">
            <Link to={`/go/passing/${_id}/1`} className="training-block-left">
                <div className="training-block-cover">
                    <div className="training-block-cover-placeholder"></div>
                    <div className="training-block-cover-icon">
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="25" cy="25" r="25" fill="white" />
                            <path
                                d="M33 24.5L20.25 31.8612V17.1388L33 24.5Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                    <div
                        className="training-block-cover-img"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_768}")`,
                        }}
                    ></div>
                </div>
                <div className="training-block-text">
                    <div className="training-block-text-top">
                        <h3 className="training-block-text__title">{title}</h3>
                        <p className="subtitle training-block-text__subtitle">
                            Пройдено {completedLessonsTitle} из {lessons.length}
                        </p>
                    </div>
                    <div className="training-block-text-bottom">
                        {master ? (
                            <p className="training-block-text__auth">
                                {master.name} {master.surname}
                            </p>
                        ) : null}
                    </div>
                </div>
            </Link>

            <span
                className="training-block__hidden"
                onClick={() => onClickHiddenUserCourse(_id)}
            >
                Удалить
            </span>
        </div>
    );
};

export default TrainingBlock;
