import axios,{ type AxiosPromise } from "axios";
import type { TaskData } from "../interface/TaskData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:3000";

const fetchData = async (): AxiosPromise<TaskData[]>=> {
    const response = axios.get(API_URL + "/tasks")
    return response;
}

export function useTaskData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['task-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}