import { useContext, useEffect, useState } from "react";
import useUserData from "../../../Hooks/useUserData";
import { Helmet } from "react-helmet";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const Users = () => {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [userData, refetch] = useUserData();
    const { user } = useContext(AuthContext);
    const [selectedUser, setSelecteduser] = useState({});
    const axiosSecure = useAxios();

    useEffect(() => {
        if (userData) {
            const newToOldUsers = userData.reverse()
            setUsers(newToOldUsers);
            setLoading(false);
        }
    }, [userData]);


    const handleUser = userInfo => {
        setSelecteduser(userInfo);

        document.getElementById("update_modal").checked = true;
    }

    const handleSubmit = e => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "You want to update the user role?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update!"
        }).then((result) => {
            if (result.isConfirmed) {

                if (user.email == selectedUser.email) {
                    Swal.fire({
                        icon: "error",
                        title: "Sorry !!",
                        text: "Can't change own role!",
                    });
                }

                // Update User Role
                else {

                    const updatedUser = {
                        userId: selectedUser._id,
                        newRole: e.target.newRole.value
                    }

                    axiosSecure.put('/update_role', updatedUser)
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Updated!",
                                    text: "You've successfully updated the user role.",
                                    icon: "success"
                                });
                            }
                        })

                        .catch(error => {
                            Swal.fire({
                                icon: "error",
                                title: "Sorry !",
                                text: error.message,
                            });
                        })
                }
            }
        })

    }

    if (loading) {
        return (
            <div className=" flex justify-center">

                <Helmet>
                    <title>日本 Learn | Manage Users</title>
                </Helmet>
                <span className="loading loading-infinity w-40 text-[#D72638]"></span>
            </div>
        );
    }

    else {
        return (
            <div className=" w-5/6 mx-auto my-10">
                <Helmet>
                    <title>日本 Learn | Manage Users</title>
                </Helmet>
                <div className=" text-center my-5">
                    <h1 className=" text-4xl font-semibold"> Manage User</h1>
                    <hr className=" w-2/3 mx-auto my-5 border-2 border-black" />
                </div>

                <div>
                    <h1 className=" text-2xl font-semibold text-[#D72638] my-5"> Total Users: {users.length} </h1>

                    <div className="overflow-x-auto  my-5">
                        <table className="table table-zebra">
                            <thead>
                                <tr className=" bg-[#D72638] text-white text-base">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th className=" opacity-0">update</th>
                                    <th className=" opacity-0">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => user ? <tr key={user._id} className=" text-base">
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td><Link onClick={() => handleUser(user)} className=" btn bg-[#D72638] text-white">Update</Link></td>
                                        <td><Link className=" btn bg-[#D72638] text-white"><FaTrashAlt className=" w-5 h-5" /></Link></td>

                                    </tr> : null
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Modal for update user */}

                {
                    selectedUser && <div>
                        <input type="checkbox" id="update_modal" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box">

                                <div>
                                    <h1 className=" text-3xl font-semibold mb-5">Update User Role</h1>
                                    <h1 className="label-text text-xl font-semibold mb-3">Name: {selectedUser.name}</h1>
                                    <h1 className="label-text text-xl font-semibold mb-3">Email: {selectedUser.email}</h1>
                                    <form onSubmit={handleSubmit} className="card-body p-4">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-xl font-semibold">Role</span>
                                            </label>

                                            <select
                                                defaultValue={selectedUser.role}
                                                name="newRole"
                                                // onChange={handleRoleChange}
                                                className="select select-bordered max-w-md mt-1 bg-white text-black"
                                            >
                                                <option value="user">User</option>
                                                <option value="admin">Admin</option>
                                            </select>

                                        </div>
                                        <div className="card-actions justify-end mt-4">
                                            <button className="btn bg-[#D72638] text-white">Update</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="modal-action">
                                    <label htmlFor="update_modal" className="btn">Close!</label>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        );
    }
};

export default Users;