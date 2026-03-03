import axios,{ type AxiosPromise } from "axios";
import type { TaskData } from "../interface/TaskData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:3000";

const postData = async (data: TaskData): AxiosPromise<any>=> {
    const response = axios.post(API_URL + "/tasks", data)
    return response;
}

export function useTaskDataMutate() {

    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['task-data']})   
        }
    })

    return mutate;
}