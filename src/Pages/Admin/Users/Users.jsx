import { useEffect, useState } from "react";
import useUserData from "../../../Hooks/useUserData";
import { Helmet } from "react-helmet";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Users = () => {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [userData] = useUserData();

    useEffect(() => {
        if (userData) {
            const newToOldUsers = userData.reverse()
            setUsers(newToOldUsers);
            setLoading(false);
        }
    }, [userData]);

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
                                        <td><label className=" btn bg-[#D72638] text-white">Update</label></td>
                                        <td><Link className=" btn bg-[#D72638] text-white"><FaTrashAlt className=" w-5 h-5" /></Link></td>

                                    </tr> : null
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
};

export default Users;