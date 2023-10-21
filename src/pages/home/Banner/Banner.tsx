// import React from "react";
// import { UseMovieList } from "../hooks/useMovieList";
import MovieList from "@/components/MovieList";
import MovieSwiper from "@/components/MovieSwiper";
import {
  UseMovieList,
  UseUpcomingMovieList,
} from "@/hooks/useUpcomingMovieList";
import { useEffect, useState } from "react";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  isActive: boolean;
}

const Banner = () => {
  const { data } = UseUpcomingMovieList();
  // const mock_data = {
  //   results: [{ id: 575264 }],
  // };
  const movies = data?.results.map((item) => ({ ...item, isActive: false }));

  const [activeMovieId, setActiveMovieId] = useState<number | undefined>();
  useEffect(() => {
    if (data && data.results.length > 0) {
      setActiveMovieId(data.results[0].id);
    }
  }, [data]);
  const handleSwiper = (id: number) => {
    setActiveMovieId(id);
  };

  return (
    <div className="relative w-full min-h-[100vh] px-0 py-[100px] overflow-hidden transition-all after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:w-[100%] after:h-[100%] after:bg-black after:opacity-60  ">
      {movies?.map((item) => {
        return (
          <MovieList
            key={item.id}
            movie_id={item.id}
            isActive={activeMovieId === item.id}
          ></MovieList>
        );
      })}
      {/* Carosoul Containwer */}
      {data && (
        <MovieSwiper handleSwiper={handleSwiper} {...data}></MovieSwiper>
      )}
    </div>
  );
};

export default Banner;
