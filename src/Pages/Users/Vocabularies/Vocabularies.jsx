import { useEffect, useState } from "react";
import useLessonsData from "../../../Hooks/useLessonsData";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';



const Vocabularies = () => {

    const { no: lessonNo} = useParams();
    const [loading, setLoading] = useState(true);
    const [vocabularies, setVocabularies] = useState([]);
    const [lessonsData] = useLessonsData();

    useEffect(() => {
        if (lessonNo && lessonsData) {
            const vocabularyData = lessonsData.find(lesson => lesson.lessonNumber == lessonNo);
            if(vocabularyData?.vocabulary?.length > 0){
                setVocabularies(vocabularyData.vocabulary);
                setLoading(false);
            }  
        }
    }, [lessonsData, lessonNo])


    // console.log(vocabularies)

    if (loading) {
        return (
            <div className=" flex justify-center">

                <Helmet>
                    <title>日本 Learn | Vocabularies</title>
                </Helmet>
                <span className="loading loading-infinity w-40 text-[#D72638]"></span>
            </div>
        );
    }

    else {
        return (
            <div className=" w-5/6 mx-auto my-20">

                <Helmet>
                    <title>日本 Learn | Vocabularies</title>
                </Helmet>

                <h1 className=" text-2xl text-[#3C3C3C] font-semibold my-5"> Total Vocabularies: {vocabularies.length}</h1>

                <div className="py-5">
                    <Swiper
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            vocabularies.map(vocabulary => <SwiperSlide key={vocabulary.word}>
                                <div
                                    className="hero h-[400px] md:h-[600px]"
                                    style={{
                                        backgroundImage: "url(https://i.ibb.co.com/0cR0VyT/card-bg.jpg)",
                                    }}>
                                    <div className="hero-overlay bg-opacity-20"></div>
                                    <div className="hero-content text-neutral-content text-center py-5">
                                        <div className=" max-w-xs md:max-w-2xl text-[#3C3C3C]">
                                            <h1 className="mb-5 text-[#D72638] text-5xl md:text-8xl font-extrabold">{vocabulary.word}</h1>
                                            <h1 className="mb-5 text-2xl md:text-4xl font-bold">({vocabulary.pronunciation})</h1>
                                            <h1 className="mb-5 text-2xl md:text-4xl font-bold">{vocabulary.meaning}</h1>
                                            <p className="mb-5 text-xl font-semibold">{vocabulary.whenToSay} </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }

                        <SwiperSlide>
                            <div
                                className="hero h-[400px] md:h-[600px]"
                                style={{
                                    backgroundImage: "url(https://i.ibb.co.com/0cR0VyT/card-bg.jpg)",
                                }}>
                                <div className="hero-overlay bg-opacity-20"></div>
                                <div className="hero-content text-neutral-content text-center py-5">
                                    <div className=" max-w-xs md:max-w-2xl text-[#3C3C3C]">
                                        <h1 className="mb-5 text-[#D72638] text-3xl md:text-6xl font-extrabold">Congratulations!!</h1>
                                        <h1 className="mb-5 text-2xl md:text-4xl font-bold">You have successfully Finished this lesson.</h1>
                                        <Link to='/lessons' className="btn">Complete</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        );
    }
};

export default Vocabularies;