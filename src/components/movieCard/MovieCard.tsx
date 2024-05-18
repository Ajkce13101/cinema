import { Genre } from "@/hooks/useMovieDetails";
import { UseMovieGenres } from "@/hooks/useMovieGenres";
import { UseTvGenres } from "@/hooks/useTvGenres";
import { Movie } from "@/hooks/useUpcomingMovieList";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import PosterUrl from "../../assets/no-poster.png";
import Img from "../LazyLoad/Img";
import "./movieCard.scss";

const MovieCard = ({ item, Paramtype }: { item: Movie; Paramtype: string }) => {
  console.log(item)
  const navigate = useNavigate();
  const gotoDetails = ({ id, type }: { id: number; type: string }) => {
    navigate(`/details/${id}/${type}`);
  };
  let Posterurl = "";
  if (item.poster_path) {
    Posterurl = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
  } else {
    Posterurl = PosterUrl;
  }

  const allGenres: { [key: number]: Genre } = {};
  const { data: movieGenres } = UseMovieGenres({ mediatype: "movie" });

  const { data: tvGenres } = UseTvGenres();

  const MergedGenres = [movieGenres, tvGenres];

  MergedGenres.map((data) => {
    return data?.genres.map((item) => (allGenres[item.id] = item));
  });
  return (
    <div
      className="w-[16%] max-xl:w-[20%]  max-lg:w-[25%] max-md:w-[32%] max-sm:w-[45%] max-sm:pb-[30px] rounded-lg "
      key={item.id}
      onClick={() =>
        gotoDetails({
          id: item.id,
          type: item.media_type ? item.media_type : Paramtype,
        })
      }
    >
      <div className="posterBlock">
        <Img src={Posterurl} className="rounded-lg"></Img>
      </div>
      <div className="textBlock">
        <div className="title text-xl font-[700]  pt-2 max-lg:text-lg max-sm:text-[16px]">
          {item.title || item.name}
        </div>
        <div className="text-slate-500 text-[15px] font-[600] max-lg:text-[14px] max-sm:text-[13px]">
          {moment(item.first_air_date || item.release_date).format("MMM D, Y")}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
