import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxios();

    const { data: isAdmin = false } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure(`/users/admin/${user.email}`);
            return res.data?.admin;
        }
    })
    return isAdmin;
};

export default useAdmin;