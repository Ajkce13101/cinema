import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import { movieGenre } from "@/data/moviegenre";

export interface Genres {
  id: number;
  name: string;
}
export interface result<T> {
  genres: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWMyOGUzMDUyYjI3ZWUwNjdlNWNjYTkyNzY3ZDVhYSIsInN1YiI6IjYyYjJkYmUzMjQ1ZGJlMDZiNDViMDdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TKfNvZIh7E1dtPYquvyv86uF_bJIl0ogvhDT_otGmXM",
  },
});

export const UseMovieGenres = () =>
  useQuery<result<Genre>, Error>({
    queryKey: ["Moviegenres"],
    queryFn: () =>
      axiosInstance
        .get(`genre/movie/list`)
        .then((res) => res.data)
        .catch((error) => console.log(error)),
    initialData: movieGenre,
  });
