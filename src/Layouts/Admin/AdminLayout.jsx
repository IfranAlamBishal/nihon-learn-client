import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminLayout = () => {
    const [greetingMassage, setGreetingMassage] = useState();
    const [greetingModal, setGreetingModal] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const alreadyShown = sessionStorage.getItem('alreadyShown');

        if (!alreadyShown && user) {
            const massage = `Hello, ${user.displayName}!`;

            setGreetingMassage(massage);

            setGreetingModal(true);

            sessionStorage.setItem('alreadyShown', 'true');
        }

    }, [user])

    const closeModal = () => {
        setGreetingModal(false);
    }

    const handleLogOut = () => {
            logOut()
                .then(() => {
                    Swal.fire({
                        title: "Logged out!",
                        text: "You've successfully logged out.",
                        icon: "success"
                    });
                    sessionStorage.clear();
                    navigate('/login');
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        title: "Sorry !",
                        text: error.massage,
                    });
                })
        }


    const dashLinks = <ul className=" menu px-1 space-y-2 text-lg font-medium">
        <li><NavLink to='/dashboard/users'>Manage Users</NavLink></li>
        <li><NavLink to='/dashboard/add_lesson'>Add Lesson</NavLink></li>
        <li><NavLink to='/dashboard/manage_lessons'>Manage Lessons</NavLink></li>
        <li><NavLink to='/dashboard/add_vocabulary'>Add Vocabulary</NavLink></li>
        <li><NavLink to='/dashboard/manage_vocabularies'>Manage Vocabularies</NavLink></li>
        <li><NavLink to='/dashboard/add_tutorial'>Add Tutorial</NavLink></li>
        <li><NavLink to='/dashboard/manage_tutorials'>Manage Tutorial</NavLink></li>
    </ul>


    return (
        <div className=" flex flex-col md:flex-row gap-10">

            {
                greetingModal && (
                    <div className="modal modal-open">
                        <div className="modal-box">
                            <h1 className="text-3xl font-bold text-[#D72638]">{greetingMassage}</h1>
                            <p className="py-4">Welcome to your dashboard! Hope you have a great experience today.</p>
                            <div className="modal-action">
                                <button onClick={closeModal} className="btn bg-[#D72638] text-white">Close</button>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className=" md:w-64 lg:w-72  md:min-h-screen p-5 bg-[#D72638] text-white flex-shrink-0">
                <Link className="btn text-2xl md:text-3xl lg:text-4xl font-bold gap-0 mb-5"><span className=" text-[#D72638]">日本</span> Learn</Link>
                <hr className=" w-2/3 mx-auto my-5 border-2 border-black" />
                {dashLinks}
                <hr className=" w-2/3 mx-auto my-5 border-2 border-black" />

                <Link onClick={handleLogOut} className="btn  text-base font-semibold">Log out</Link>
            </div>
            <div className=" flex-1 p-5 min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayout;