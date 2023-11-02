import { Genre } from "@/hooks/useMovieDetails";
import "./genres.scss";

const Genres = ({
  data,
  genres,
}: {
  data: number[] | undefined;
  genres: { [key: number]: Genre };
}) => {
  if (data && data?.length > 1) {
    return (
      <div className="genres">
        {data?.map((item) => {
          return (
            <div className="genre" key={item}>
              {genres[item].name}
            </div>
          );
        })}
      </div>
    );
  }
};

export default Genres;
