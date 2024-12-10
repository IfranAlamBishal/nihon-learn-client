import { useEffect, useState } from "react";
import LessonCard from "./LessonCard/LessonCard";
import { Helmet } from "react-helmet";
import useLessonsData from "../../../Hooks/useLessonsData";

const Lessons = () => {

    const [loading, setLoading] = useState(true);
    const [lessonsData] = useLessonsData();
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        if (lessonsData) {
            setLessons(lessonsData);
            setLoading(false);
        }
    }, [lessonsData]);

    if (loading) {
        return (
            <div className=" flex justify-center">

                <Helmet>
                    <title>日本 Learn | Lessons</title>
                </Helmet>
                <span className="loading loading-infinity w-36 text-[#D72638]"></span>
            </div>
        );
    }

    else {
        return (
            <div className=" w-5/6 mx-auto my-20">

                <Helmet>
                    <title>日本 Learn | Lessons</title>
                </Helmet>

                <h1 className=" text-2xl text-[#3C3C3C] font-semibold my-5"> Total Lessons: {lessons.length}</h1>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
                    {
                        lessons.map(lesson => <LessonCard key={lesson.lessonNumber} lesson={lesson}></LessonCard>)
                    }
                </div>
            </div>
        );
    }
};

export default Lessons;