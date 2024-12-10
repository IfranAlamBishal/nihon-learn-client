import { Link } from "react-router-dom";

const LessonCard = ({ lesson }) => {

    const { lessonNumber, lessonName} = lesson;

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <div className="card bg-[#D72638] text-white">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-semibold">Lesson - {lessonNumber}</h2>
                    <p className=" text-lg font-medium">Lesson Name: {lessonName}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/lessons/lesson-no/${lessonNumber}`} onClick={scrollUp} className="btn">Start</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonCard;