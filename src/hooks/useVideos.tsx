import axios from "axios";

import { useQuery } from "@tanstack/react-query";

interface Result {
  iso_639_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: true;
  published_at: Date;
  id: number;
}

interface Videos {
  id: number;
  results: Result[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWMyOGUzMDUyYjI3ZWUwNjdlNWNjYTkyNzY3ZDVhYSIsInN1YiI6IjYyYjJkYmUzMjQ1ZGJlMDZiNDViMDdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TKfNvZIh7E1dtPYquvyv86uF_bJIl0ogvhDT_otGmXM",
  },
});

export const useVideos = ({ type, id }: { type: string; id: number }) =>
  useQuery<Videos, Error>({
    queryKey: ["Videos", type, id],
    queryFn: () =>
      axiosInstance
        .get(`/${type}/${id}/videos`)
        .then((res) => res.data)
        .catch((error) => console.log(error)),
  });
