import { Movie } from "@/hooks/useUpcomingMovieList.tsx";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./carousel.scss";
import Img from "../LazyLoad/Img";
import moment from "moment";
import CircleRating from "../circleRating/circleRating.tsx";
import { UseMovieGenres } from "@/hooks/useMovieGenres.tsx";
import { UseTvGenres } from "@/hooks/useTvGenres.tsx";
import Genres from "../genres/Genres.tsx";
import { useNavigate } from "react-router-dom";
import PosterUrl from "../../assets/no-poster.png";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Genre {
  id: number;
  name: string;
}

const Carousel = ({
  data,
  isLoading,
  type,
}: {
  data: Movie[] | undefined;
  isLoading: boolean;
  type: string;
}) => {
  const carouselContainer = useRef<HTMLDivElement>(null);

  const navigation = (dir: string) => {
    const container = carouselContainer?.current;
    if (container) {
      const scrollAmount =
        dir === "left"
          ? container.scrollLeft - (container?.offsetWidth + 20)
          : container.scrollLeft + (container?.offsetWidth + 20);
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const allGenres: { [key: number]: Genre } = {};
  const { data: movieGenres } = UseMovieGenres();
  console.log(movieGenres);
  const { data: tvGenres } = UseTvGenres();
  console.log(tvGenres);
  const MergedGenres = [movieGenres, tvGenres];
  console.log(MergedGenres);
  MergedGenres.map((data) => {
    return data?.genres.map((item) => (allGenres[item.id] = item));
  });
  const navigate = useNavigate();

  const gotoDetails = ({ id }: { id: number }) => {
    navigate(`/details/${id}/${type}`);
    return { id, type };
  };

  const skItem = () => {
    return (
      <div className="w-[250px]">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div className="posterBlock skeleton">
            <Skeleton height={60} />
          </div>
          <div className="textBlock pt-2">
            <div className="title skeleton">
              <Skeleton />
            </div>
            <div className="date skeleton">
              <Skeleton />
            </div>
          </div>
        </SkeletonTheme>
      </div>
    );
  };

  return (
    <div className="carousel relative">
      <ChevronRight
        className="carouselRighttNav arrow"
        onClick={() => navigation("right")}
      />
      <ChevronLeft
        className="carouselLeftNav arrow"
        onClick={() => navigation("left")}
      />
      {isLoading ? (
        <div className="skeletonItem flex gap-5">
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
        </div>
      ) : (
        <div className="carouselItems" ref={carouselContainer}>
          {data?.map((item) => {
            let Posterurl = "";
            if (item.poster_path) {
              Posterurl = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
            } else {
              Posterurl = PosterUrl;
            }

            return (
              <div
                className="carouselItem"
                key={item.id}
                onClick={() => gotoDetails({ id: item.id })}
              >
                <div className="posterBlock">
                  <Img src={Posterurl}></Img>
                  <CircleRating rating={item.vote_average}></CircleRating>
                  <Genres
                    data={item.genre_ids.slice(0, 2)}
                    genres={allGenres}
                  ></Genres>
                </div>
                <div className="textBlock">
                  <span className="title">{item.title || item.name}</span>
                  <span className="date">
                    {moment(item.release_date).format("MMM D, Y")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carousel;
