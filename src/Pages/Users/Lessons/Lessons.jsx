import { useEffect, useState } from "react";
import LessonCard from "./LessonCard/LessonCard";
import { Helmet } from "react-helmet";
import useLessonsData from "../../../Hooks/useLessonsData";

const Lessons = () => {

    const [loading, setLoading] = useState(true);
    const [lessons, setLessons] = useState([]);
    const [totalLesson, setTotalLesson] = useState([]);
    const [lessonsData] = useLessonsData();

    useEffect(() => {
        if (lessonsData) {
            setLessons(lessonsData);

            const lessonCount = [
                ...new Set(lessonsData.map((lesson) => lesson.lessonNo))
            ];
            setTotalLesson(lessonCount);

            setLoading(false);
        }
    }, [lessonsData]);

    console.log(lessons);

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

                <h1 className=" text-2xl text-[#3C3C3C] font-semibold my-5"> Total Lessons: {totalLesson.length}</h1>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
                    {
                        totalLesson.map(lesson => <LessonCard key={lesson} lesson={lesson}></LessonCard>)
                    }
                </div>
            </div>
        );
    }
};

export default Lessons;