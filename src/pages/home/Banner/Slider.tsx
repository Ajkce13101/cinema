import { Movie } from "@/hooks/useUpcomingMovieList";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const Slider = ({
  newData,
  activeMovieIndex,
  setActiveMovieIndex,
}: {
  newData: Movie[];
  activeMovieIndex: number;
  setActiveMovieIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div>
      <div className="absolute bottom-0 left-0 right-0 mx-auto flex items-center justify-center mb-20 gap-2">
        {newData.map((item, index) => {
          return (
            <span
              onClick={() => setActiveMovieIndex(index)}
              className={`h-3 w-3 rounded-full bg-white z-50 transition-all duration-500 cursor-pointer ${
                activeMovieIndex === index ? "bg-blue-700 w-5" : ""
              }`}
            ></span>
          );
        })}
      </div>
      <div
        onClick={() =>
          setActiveMovieIndex((prev) => {
            if (prev === 0) {
              return newData?.length - 1;
            }
            return prev - 1;
          })
        }
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%]  text-white z-50 left-5"
      >
        <ArrowLeft></ArrowLeft>
      </div>
      <div
        onClick={() =>
          setActiveMovieIndex((prev) => {
            if (prev === newData?.length - 1) {
              return 0;
            }
            return prev + 1;
          })
        }
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%]  text-white z-50 right-5"
      >
        <ArrowRight></ArrowRight>
      </div>
    </div>
  );
};

export default Slider;
