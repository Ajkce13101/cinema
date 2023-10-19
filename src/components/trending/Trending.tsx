import React, { useState } from "react";
import SwitchTabs from "../switchTabs/SwitchTabs";
import { UseMovieList } from "@/hooks/useMovieList";
import Carousel from "../carousel/Carousel";

const Trending = () => {
  const [timeFrame, setTimeFrame] = useState("day");

  const { data, isLoading } = UseMovieList({ time: timeFrame });

  const onTabChange = (tab: string) => {
    setTimeFrame(tab === "Day" ? "day" : "week");
  };
  return (
    <section className="relative overflow-hidden py-20">
      <div className="max-container padding-x">
        <div className="flex justify-between">
          <div className="flex-1">
            <h1 className="relative section-effect ">Trending</h1>
          </div>
          <SwitchTabs
            data={["Day", "Week"]}
            onTabChange={onTabChange}
          ></SwitchTabs>
        </div>
        <Carousel data={data?.results} isLoading={isLoading}></Carousel>
      </div>
    </section>
  );
};

export default Trending;
