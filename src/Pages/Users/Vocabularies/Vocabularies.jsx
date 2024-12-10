import { useEffect, useState } from "react";
import useLessonsData from "../../../Hooks/useLessonsData";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const Vocabularies = () => {

    const lessonNo = useParams();
    const lessonNum = lessonNo.no;
    const [loading, setLoading] = useState(true);
    const [vocabularies, setVocabularies] = useState([]);
    const [lessonsData] = useLessonsData();

    useEffect(() => {
        if (lessonsData) {
            const vocabularyData = lessonsData.find(lesson => lesson.lessonNumber == lessonNum);

            setVocabularies(vocabularyData);
            setLoading(false);
        }
    }, [lessonsData, lessonNum])

    const vocabularyList = vocabularies.vocabulary;

    // console.log(vocabularyList)

    if (loading) {
        return (
            <div className=" flex justify-center">

                <Helmet>
                    <title>日本 Learn | Vocabularies</title>
                </Helmet>
                <span className="loading loading-infinity w-36 text-[#D72638]"></span>
            </div>
        );
    }

    else {
        return (
            <div className=" w-5/6 mx-auto my-20">

                <Helmet>
                    <title>日本 Learn | Vocabularies</title>
                </Helmet>

                <h1 className=" text-2xl text-[#3C3C3C] font-semibold my-5"> Total Vocabularies: {vocabularyList.length}</h1>

                <div className="py-5">

                </div>
            </div>
        );
    }
};

export default Vocabularies;