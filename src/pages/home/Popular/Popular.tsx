import React, { useState } from "react";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";
import { UsePopularMovieLists } from "@/hooks/usePopularMovies";

const Popular = () => {
  const [type, setType] = useState("movie");

  const { data, isLoading } = UsePopularMovieLists({ type: type });

  const onTabChange = (tab: string) => {
    setType(tab === "Movie" ? "movie" : "tv");
  };
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="max-container padding-x">
        <div className="flex justify-between">
          <div className="flex-1">
            <h1 className="relative section-effect ">What's Popular</h1>
          </div>
          <SwitchTabs
            data={["Movie", "TV Series"]}
            onTabChange={onTabChange}
          ></SwitchTabs>
        </div>
        <Carousel
          data={data?.results}
          isLoading={isLoading}
          type={type}
        ></Carousel>
      </div>
    </section>
  );
};

export default Popular;
