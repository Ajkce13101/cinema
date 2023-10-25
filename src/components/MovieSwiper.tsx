import { Swiper, SwiperSlide } from "swiper/react";

//Import swiper styles

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Movie } from "@/hooks/useUpcomingMovieList";
import Img from "./LazyLoad/Img";

const MovieSwiper = ({
  handleSwiper,
  results,
}: {
  results: Movie[];
  handleSwiper: (id: number) => void;
}) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="absolute bottom-5 left-0 right-0 mx-auto w-[60vw] bg-opacity-50 bg-black , backdrop-blur-xl shadow-2xl shadow-white px-4 py-6  z-50"
    >
      {results.map((item) => (
        <SwiperSlide
          className="bg-cover bg-center w-[130px] h-[160px]"
          key={item.id}
        >
          <Img
            className="block w-[130px] h-[160px]"
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            onClick={() => handleSwiper(item.id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSwiper;
