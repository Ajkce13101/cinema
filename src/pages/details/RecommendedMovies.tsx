import React, { useState } from "react";

import { UseTrendingMovieList } from "@/hooks/useTrendingMovie";

import Carousel from "@/components/carousel/Carousel";
import { useSimiliarMovies } from "@/hooks/useSimiliarMovies";
import { useRecommendations } from "@/hooks/useRecommendations";

const Recommendations = ({ type, id }: { type: string; id: number }) => {
  const { data, isLoading } = useRecommendations({ type: type, id: id });
  if (!isLoading && data?.results.length > 0) {
    return (
      <section className="relative overflow-hidden pt-20">
        <div className="">
          <div className="flex justify-between">
            <div className="flex-1">
              <h1 className="relative section-effect capitalize font-bold text-2xl pt-4">
                Recommendations
              </h1>
            </div>
          </div>
          <Carousel
            data={data?.results}
            isLoading={isLoading}
            type="movie"
          ></Carousel>
        </div>
      </section>
    );
  }
};

export default Recommendations;
