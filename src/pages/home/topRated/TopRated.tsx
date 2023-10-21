import { UseTopRatedMovieLists } from "@/hooks/useTopRated";
import { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

const TopRated = () => {
  const [type, setType] = useState("movie");

  const { data, isLoading } = UseTopRatedMovieLists({ type: type });

  const onTabChange = (tab: string) => {
    setType(tab === "Movie" ? "movie" : "tv");
  };
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="max-container padding-x">
        <div className="flex justify-between">
          <div className="flex-1">
            <h1 className="relative section-effect ">Top Rated</h1>
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

export default TopRated;
