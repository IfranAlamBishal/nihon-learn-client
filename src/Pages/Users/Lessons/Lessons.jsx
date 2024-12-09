import { useEffect, useState } from "react";

const Lessons = () => {

    const [loading, setLoading] = useState(true);
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('../../../../public/lessons.json');
            const lesson = await response.json();
            setLessons(lesson);
            setLoading(false);
        }

        fetchData();
    }, []);

    // console.log(lessons);

    if (loading) {
        return (
            <div className=" flex justify-center">
                <span className="loading loading-infinity w-36 text-[#D72638]"></span>
            </div>
        );
    }

    else {
        return (
            <div className=" w-5/6 mx-auto my-20">
                <h1 className=" text-xl"> Total Lessons: {lessons.length}</h1>
            </div>
        );
    }
};

export default Lessons;