import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateName, updatePhoto, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(() => {
                updateName(data.name);
                updatePhoto(data.photo);
                logOut();
                Swal.fire({
                    icon: "success",
                    title: "Registered !",
                    text: "You have successfully registered! Please log in to continue.",
                });
                navigate('/login')
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Sorry !",
                    text: error.message,
                });
            })
    };

    return (
        <div>
            <Helmet>
                <title>日本 Learn | Register</title>
            </Helmet>

            <div className="hero min-h-screen bg-[#D72638] py-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">

                    <div className="text-center lg:text-left text-white">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6 font-semibold">Join NexTour today and unlock a world of extraordinary travel experiences.</p>
                    </div>

                    <div className="card shrink-0 w-80 mx-auto md:max-w-sm shadow-2xl bg-white text-[#3C3C3C]">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="name" className="input input-bordered bg-white text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Photo</span>
                                </label>
                                <input type="url" {...register("photo")} placeholder="photo" className="input input-bordered bg-white text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" className="input input-bordered bg-white text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} {...register("password", {
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                })} placeholder="password" className="input input-bordered bg-white text-black" required />
                                <div onClick={() => setShowPassword(!showPassword)} className=" text-lg text-[#D72638] flex justify-end p-1">
                                    {
                                        showPassword ?
                                            <Link><FaEye className=" w-6 h-6" /></Link>
                                            :
                                            <Link><FaEyeSlash className=" w-6 h-6" /></Link>
                                    }
                                </div>
                                {errors.password && <span className=" text-xs text-[#D72638] mt-1">Password must have at least 6 characters including at least a upper case(A-Z) and a lower case(a-z) letter.</span>}
                                <p className=" text-base font-medium">Already have an account ? <br />
                                    <Link to="/login" className=" text-blue-600">Log in now</Link> and continue your learning !</p>
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-[#D72638] text-white" value='Register'></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;