import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useLessonsData = () => {

    const axiosSecure = useAxios();
    const { refetch, data: lessonsData = [] } = useQuery({
        queryKey: ['lessonsData'],
        queryFn: async () => {
            const response = await axiosSecure('/lessons');
            return response.data;
        }
    })

    return [lessonsData, refetch];
};

export default useLessonsData;