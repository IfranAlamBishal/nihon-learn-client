import { useQuery } from "@tanstack/react-query";

const useLessonsData = () => {

    const {refetch, data: lessonsData = []} = useQuery({
        queryKey:['lessonsData'],
        queryFn: async () => {
            const response = await fetch('/lessons.json');
            const data = await response.json();
            return data;
        }
    })

    return [lessonsData, refetch];
};

export default useLessonsData;