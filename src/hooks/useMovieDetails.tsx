import axios from "axios";


import { useQuery } from "@tanstack/react-query";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  genres: Genre[];
  poster_path: string;
  media_type: string;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
  tagline: string;
  credits?: { cast: Cast[] };
}
export interface Genre {
  id: number;
  name: string;
}

export interface Cast {
  name: string;
  profile_path: string;
  character: string;
}

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWMyOGUzMDUyYjI3ZWUwNjdlNWNjYTkyNzY3ZDVhYSIsInN1YiI6IjYyYjJkYmUzMjQ1ZGJlMDZiNDViMDdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TKfNvZIh7E1dtPYquvyv86uF_bJIl0ogvhDT_otGmXM",
  },
});

export const UseMovieDetails = ({
  movie_id,
  type = "movie",
}: {
  movie_id: number;
  type?: string;
}) =>
  useQuery<Movie, Error>({
    queryKey: ["MovieDetails", movie_id],
    queryFn: () =>
      axiosInstance
        .get(`/${type}/${movie_id}?append_to_response=credits`)
        .then((res) => res.data)
        .catch((error) => console.log(error)),
    enabled: !!movie_id,
  });
