import { Link } from "react-router-dom";

const LessonCard = ({ lesson }) => {

    const level = <>

        {
            lesson > 2 ?
                <>Intermediate</>
                :
                <>Beginner</>
        }
    </>
    return (
        <div>
            <div className="card bg-[#D72638] text-white">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-semibold">Lesson - {lesson}</h2>
                    <p className=" text-lg font-medium">Level: {level}</p>
                    <div className="card-actions justify-end">
                        <Link className="btn">Start</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonCard;