import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useUserData = () => {

    const axiosSecure = useAxios();
    const { refetch, data: userData = [] } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const response = await axiosSecure('/users');
            return response.data;
        }
    })

    return [userData, refetch];
};

export default useUserData;