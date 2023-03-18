import React from "react";
import { VideoPlayer } from "../../";

import {Image} from "../../../models/IImage";

interface CoursePageLessonsVideoProps {
    courseId: string;
    image?: Image;
    videoPlaecholder: boolean;
}

const CoursePageLessonsVideo: React.FC<CoursePageLessonsVideoProps> = ({
    courseId,
    image,
    videoPlaecholder,
}) => {
    const [play, setPlay] = React.useState<boolean>(false);
    const [isFirstPlay, setIsFirstPlay] = React.useState<boolean>(true);

    React.useEffect(() => {
        if (isFirstPlay) {
            setIsFirstPlay(false);
        } else if (videoPlaecholder) {
            setPlay(false);
        } else {
            setPlay(true);
        }
    }, [videoPlaecholder]);

    return (
        <>
            <VideoPlayer
                url={`${process.env.REACT_APP_API_DOMEN}/courses/first/${courseId}/video/playlist.m3u8`}
                image={`${process.env.REACT_APP_IMAGE_DOMEN}/${image?.size_1536}`}
                play={play}
                setPlay={setPlay}
            />
        </>
    );
};

export default CoursePageLessonsVideo;
