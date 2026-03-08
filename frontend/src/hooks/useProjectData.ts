import axios, { type AxiosPromise } from "axios";
import type { ProjectData } from "../interface/ProjectData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:3000";

const fetchData = async (): AxiosPromise<ProjectData[]> => {
  const response = axios.get(API_URL + "/projects");
  return response;
};

export function useProjectData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["project-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
