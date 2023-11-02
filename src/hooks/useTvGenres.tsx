import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { result } from "./useMovieGenres";

interface Genre {
  id: number;
  name: string;
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWMyOGUzMDUyYjI3ZWUwNjdlNWNjYTkyNzY3ZDVhYSIsInN1YiI6IjYyYjJkYmUzMjQ1ZGJlMDZiNDViMDdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TKfNvZIh7E1dtPYquvyv86uF_bJIl0ogvhDT_otGmXM",
  },
});

export const UseTvGenres = () =>
  useQuery<result<Genre>, Error>({
    queryKey: ["Tvgenres"],
    queryFn: () =>
      axiosInstance
        .get(`genre/tv/list`)
        .then((res) => res.data)
        .catch((error) => console.log(error)),
  });
