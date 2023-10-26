// import React from "react";
// import { UseMovieList } from "../hooks/useMovieList";
import GlobalLoader from "@/components/GlobalLoader";
import MovieList from "@/components/MovieList";
import MovieSwiper from "@/components/MovieSwiper";
import { UseUpcomingMovieList } from "@/hooks/useUpcomingMovieList";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Slider from "./Slider";

const Banner = () => {
  const { data, isLoading } = UseUpcomingMovieList();
  let newData = [];
  if (!isLoading && data?.results.length > 0) {
    newData = data?.results.slice(0, 8);
  }
  const [activeMovieIndex, setActiveMovieIndex] = useState(0);

  const handleSwiper = (id: number) => {
    setActiveMovieIndex(id);
  };
  useEffect(() => {
    const effect = setTimeout(() => {
      setActiveMovieIndex((prev) =>
        prev === newData?.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => {
      clearTimeout(effect);
    };
  }, [activeMovieIndex]);

  if (isLoading) {
    return <GlobalLoader></GlobalLoader>;
  }

  if (!isLoading && newData) {
    return (
      <div className="relative w-full min-h-[100vh] px-0 py-[100px] overflow-hidden transition-all after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:w-[100%] after:h-[100%] after:bg-black after:opacity-60  ">
        {newData.map((item, index) => {
          return (
            <>
              <MovieList
                key={item.id}
                movie_id={item.id}
                isActive={activeMovieIndex === index}
              ></MovieList>
            </>
          );
        })}

        {/* Automatic Carousel and slider  */}
        {newData && (
          <Slider
            newData={newData}
            activeMovieIndex={activeMovieIndex}
            setActiveMovieIndex={setActiveMovieIndex}
          ></Slider>
        )}
        {/* Carosoul Containwer */}
        {/* {data && (
          <MovieSwiper handleSwiper={handleSwiper} {...data}></MovieSwiper>
        )} */}
      </div>
    );
  }
};

export default Banner;
