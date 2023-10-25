import React from "react";
import { ScaleLoader } from "react-spinners";
import "./globalLoader.scss";

const GlobalLoader = () => {
  return (
    <div className=" loader fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] bg-primary-foreground flex justify-center items-center ">
      <ScaleLoader color="hsl(210 40% 98%)"></ScaleLoader>
    </div>
  );
};

export default GlobalLoader;
