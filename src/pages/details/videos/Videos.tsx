import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Mousewheel, FreeMode } from "swiper/modules";
import { useVideos } from "@/hooks/useVideos";
import { PlayCircleIcon } from "lucide-react";
import VideoPlayer from "@/components/ViderPlayer";
import { ClipLoader } from "react-spinners";

const Videos = ({ type, id }: { type: string; id: number }) => {
  const { data, isLoading } = useVideos({ type: type, id: id });
  const [videoId, setVideoId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  if (data?.results.length > 0) {
    return (
      <div className="pt-20">
        <h1 className="text-2xl font-semibold pb-6">Top Videos</h1>
        <div className=" overflow-hidden gap-10 ">
          <Swiper
            direction={"horizontal"}
            slidesPerView={4}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 2,
            }}
            freeMode={true}
            modules={[Mousewheel, FreeMode]}
            className="mySwiper"
          >
            {isLoading && <ClipLoader color="white"></ClipLoader>}
            {data.results?.map((video) => (
              <>
                <SwiperSlide>
                  <div className="w-[350px] rounded-lg relative">
                    <img
                      src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                      className="w-full border-inherit rounded-lg"
                      alt=""
                    />
                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full flex items-center justify-center">
                      <PlayCircleIcon
                        onClick={() => {
                          setVideoId(video.key);
                          setIsOpen(true);
                        }}
                        className="items-center h-[60px] w-[60px]"
                        strokeWidth={1}
                      ></PlayCircleIcon>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>

        {/* Video Player Component */}
        <div>
          <VideoPlayer
            id={videoId}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setVideoId={setVideoId}
          ></VideoPlayer>
        </div>

        {/* Similiar Movies Component */}
      </div>
    );
  }
};

export default Videos;
