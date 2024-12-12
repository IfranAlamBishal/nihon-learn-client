import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Nav = () => {

    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logged out!",
                    text: "You've successfully logged out.",
                    icon: "success"
                });
                
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Sorry !",
                    text: error.massage,
                });
                navigate('/login')
            })
        }

    const navBtns = <>
        <li><Link to='/lessons'>Lessons</Link></li>
        <li><Link>Tutorials</Link></li>
    </>

    return (
        <div>
            <div className="navbar py-5 px-5 md:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#D72638]">
                            {navBtns}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl md:text-3xl lg:text-4xl font-bold gap-0"><span className=" text-[#D72638]">日本</span> Learn</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-lg text-[#D72638]">
                        {navBtns}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link onClick={handleLogOut} className="btn btn-error text-white text-base font-semibold">Log out</Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;