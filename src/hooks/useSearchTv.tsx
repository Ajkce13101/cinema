import axios from "axios";

import { useQuery } from "@tanstack/react-query";

export interface Data {
  page: number;
  results: Movie[];
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  genre_ids: number[];
  poster_path: string;
  media_type: string;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWMyOGUzMDUyYjI3ZWUwNjdlNWNjYTkyNzY3ZDVhYSIsInN1YiI6IjYyYjJkYmUzMjQ1ZGJlMDZiNDViMDdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TKfNvZIh7E1dtPYquvyv86uF_bJIl0ogvhDT_otGmXM",
  },
});

export const useSearchMovie = ({ query }: { query: string }) =>
  useQuery<Data, Error>({
    queryKey: ["SearchResults", query],
    queryFn: () =>
      axiosInstance
        .get(`/search/tv?query=${query}`)
        .then((res) => res.data)
        .catch((error) => console.log(error)),
  });
