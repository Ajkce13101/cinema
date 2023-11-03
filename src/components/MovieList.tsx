import { UseMovieDetails } from "@/hooks/useMovieDetails";
import { Bookmark, HeartIcon, PlayCircle, SaveIcon } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import GlobalLoader from "./GlobalLoader";

const MovieList = ({
  movie_id,
  isActive,
}: {
  movie_id: number;
  isActive: boolean;
}) => {
  const { data, isLoading } = UseMovieDetails({ movie_id });

  if (isLoading) {
    return <GlobalLoader></GlobalLoader>;
  }

  if (!isLoading && data) {
    return (
      <div className="absolute  h-[100vh] top-0 left-0 right-0 bottom-0 flex justify-between items-center overflow-hidden pb-[100px] ">
        <img
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          alt="Background Image"
          className={`absolute top-0 left-0 right-0 bottom-0 w-full h-[100vh] object-cover object-center opacity-0 transition  ${
            isActive && "opacity-100 visible"
          }`}
        />

        <div className="max-container padding-x  absolute top-0 bottom-0 h-full left-0 right-0 z-50">
          <div className="grid grid-cols-2 h-full items-center justify-center left-0 right-0 mx-auto max-lg:grid-cols-1">
            <div
              className={`relative max-w-[580px] transform scale-0 transition z-1000 items-center ${
                isActive && "opacity-100 scale-100"
              }`}
            >
              {isLoading ? (
                <Skeleton></Skeleton>
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                  alt=""
                  className="max-w-[150px] lg:w-[120px] mb-5"
                />
              )}
              <h4 className="font-medium text-3xl lg:text-xl max-md:text-[17px] max-md:font-bold">
                <span className="pr-3 border-r-2  border-white ">
                  {data?.release_date}
                </span>
                <span className="mx-3   border-white bg-primary italic">
                  {data?.runtime} mins
                </span>
                {data?.genres.map((genre) => (
                  <span key={genre.id} className="border-l-2 border-white px-3">
                    {" "}
                    {genre.name}
                  </span>
                ))}
              </h4>

              <h3 className="mt-5 text-lg font-bold max-md:text-md">
                {data?.tagline}
              </h3>
              <p className="line-clamp-3 max-md:text-sm">{data?.overview}</p>
              {/* {data ? (
              <TextTruncate
                line={4}
                element="p"
                truncateText="…"
                text={data?.overview}
                //   textTruncateChild={<a href="#">Read on</a>}
              />
            ) : (
              <p>Loading</p>
            )} */}

              <div className="flex gap-3">
                <div className="rounded-full gradient-btn-rounded inline-flex p-1.5 mt-3">
                  <HeartIcon className=""></HeartIcon>
                </div>
                <div className="rounded-full gradient-btn-rounded inline-flex p-1.5 mt-3">
                  <Bookmark></Bookmark>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center max-lg:hidden">
              <div
                className={`relative scale-0 transition z-50 opacity-0 ${
                  isActive && "scale-100 opacity-100"
                } `}
              >
                <h2 className="uppercase text-7xl text-center mb-[20px] date-effect">
                  on 15th August
                </h2>
              </div>
              <div
                className={`relative opacity-0 scale-0 flex items-center  ${
                  isActive && "opacity-100 scale-100"
                }`}
              >
                <a
                  href="#"
                  className="relative text-white w-[80px] h-[80px] transition z-50 bg-transparent backdrop-blur-lg rounded-full flex justify-center items-center cursor-pointer"
                >
                  <PlayCircle className="play-icon before:animate-play" />
                </a>
                <p className="text-white text-xl ml-5 mb-0 items-center text-center">
                  Watch Trailer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieList;
