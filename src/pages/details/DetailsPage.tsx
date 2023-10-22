import { allGenres } from "@/components/carousel/Carousel";
import CircleRating from "@/components/circleRating/circleRating";
import Genres from "@/components/genres/Genres";
import { Genre, UseMovieDetails } from "@/hooks/useMovieDetails";
import { UseMovieGenres } from "@/hooks/useMovieGenres";
import { UseTvGenres } from "@/hooks/useTvGenres";
import { PlayCircleIcon } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useParams } from "react-router-dom";
import "./details.scss";

const DetailsPage = () => {
  const { id, type } = useParams();

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

  if (id) {
    const { data, isLoading } = UseMovieDetails({
      movie_id: parseInt(id),
      type: type,
    });
    const genreId = data?.genres.map((item) => item.id);
    if (isLoading) {
      return (
        <div className="h-[100vh] flex items-center justify-center">
          Loading...
        </div>
      );
    }
    if (data) {
      return (
        <div className="max-container padding-x mt-20">
          <img
            src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
            alt="Background Image"
            className={`absolute top-0 left-0 right-0 bottom-0 w-full h-[100vh] object-cover object-center opacity-10 transition`}
          />

          <div className="flex pt-[45px] gap-20">
            <div className="">
              <img
                src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                alt=""
                className="rounded-lg min-w-[350px] w-[350px]"
              />
            </div>
            <div>
              <h1 className="text-4xl pb-2">{data?.title}</h1>
              <p className="text-slate-400 pb-2">{data?.tagline}</p>
              <Genres data={genreId || undefined} genres={allGenres}></Genres>
              <div className="flex pt-6 pb-6 items-center gap-5">
                <div className="bg-[#051325] rounded-full w-[80px]">
                  <CircularProgressbar
                    value={data?.vote_average}
                    maxValue={10}
                    text={data?.vote_average.toFixed(1)}
                    styles={buildStyles({
                      pathColor:
                        data.vote_average < 5
                          ? "red"
                          : data.vote_average < 7
                          ? "orange"
                          : "green",
                      textColor: "white",
                      trailColor: "#051325",
                      backgroundColor: "black",
                    })}
                    className="text-white"
                  />
                </div>

                <PlayCircleIcon
                  size={80}
                  strokeWidth={1}
                  className="w-[70px] hover:text-primary hover:bg-primary"
                ></PlayCircleIcon>

                <p className="text-2xl">Watch Trailer</p>
              </div>

              <h2 className="text-2xl pb-1">Overview</h2>
              <p className="text-[15px] pb-8">{data.overview}</p>

              <div className=" gap-5 line flex pb-2 font-semibold tracking-wide">
                <div>
                  Status: <span className="text-slate-500">Released</span>
                </div>
                <div>
                  Release Date:{" "}
                  <span className="text-slate-500">
                    {moment(data.release_date).format("MMM d, Y")}
                  </span>
                </div>
                <div>
                  Runtime:{" "}
                  <span className="text-slate-500">{data.runtime}</span>
                </div>
              </div>
              <div className="pt-4 gap-5 line flex pb-4 font-semibold tracking-wide ">
                Director : <span>Sam Neil</span>
              </div>
              <div className="pt-4 gap-5 line flex pb-4 font-semibold tracking-wide">
                Writer : <span>Mattnew Tabak</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="h-[90vh] mt-20 flex justify-center items-center">
      Could't find the movie with id-<span> {id}</span>
    </div>
  );
};

export default DetailsPage;
