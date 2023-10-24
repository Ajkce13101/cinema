import { Movie } from "@/hooks/useUpcomingMovieList";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Img from "../LazyLoad/Img";
import CircleRating from "../circleRating/circleRating";
import Genres from "../genres/Genres";
import "./movieCard.scss";
import PosterUrl from "../../assets/no-poster.png";
import { UseMovieGenres } from "@/hooks/useMovieGenres";
import { Genre } from "@/hooks/useMovieDetails";
import { UseTvGenres } from "@/hooks/useTvGenres";

const MovieCard = ({ item, }: { item: Movie }) => {
  const navigate = useNavigate();
  const gotoDetails = ({ id, type }: { id: number; type: string }) => {
    navigate(`/details/${id}/${type}`);
    return { id, type };
  };
  let Posterurl = "";
  if (item.poster_path) {
    Posterurl = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
  } else {
    Posterurl = PosterUrl;
  }

  const allGenres: { [key: number]: Genre } = {};
  const { data: movieGenres } = UseMovieGenres();

  const { data: tvGenres } = UseTvGenres();

  const MergedGenres = [movieGenres, tvGenres];

  MergedGenres.map((data) => {
    return data?.genres.map((item) => (allGenres[item.id] = item));
  });
  return (
    <div
      className="w-[230px] rounded-lg "
      key={item.id}
      onClick={() => gotoDetails({ id: item.id, type: item.media_type })}
    >
      <div className="posterBlock">
        <Img src={Posterurl} className="rounded-lg"></Img>
      </div>
      <div className="textBlock">
        <div className="title text-xl font-[700]  pt-2">
          {item.title || item.name}
        </div>
        <div className="text-slate-500 text-[15px] font-[600]">
          {moment(item.release_date).format("MMM D, Y")}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
