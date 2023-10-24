import React, { Dispatch, SetStateAction } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({
  id,
  isOpen,
  setIsOpen,
  setVideoId,
}: {
  id: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setVideoId: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 items-center flex-col justify-center h-[100vh] z-50 backdrop-blur-sm  ${
        isOpen ? "flex " : "hidden"
      }`}
    >
      <div className={`w-[840px] h-[480px]   ${isOpen ? "" : " "} `}>
        <div
          className="text-end cursor-pointer pb-1"
          onClick={() => {
            setIsOpen(false);
            setVideoId("");
          }}
        >
          Close
        </div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls={true}
          width="100%"
          height="100%"
        ></ReactPlayer>
      </div>
    </div>
  );
};

export default VideoPlayer;
