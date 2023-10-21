import React, { useState } from "react";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import Carousel from "../../../components/carousel/Carousel";
import { UseTrendingMovieList } from "@/hooks/useTrendingMovie";

const Trending = () => {
  const [timeFrame, setTimeFrame] = useState("day");

  const { data, isLoading } = UseTrendingMovieList({ time: timeFrame });

  const onTabChange = (tab: string) => {
    setTimeFrame(tab === "Day" ? "day" : "week");
  };
  return (
    <section className="relative overflow-hidden pt-20">
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
