import React from "react";
import "./genres.scss";
import { Genre } from "@/hooks/useMovieDetails";

const Genres = ({
  data,
  genres,
}: {
  data: unknown;
  genres: { [key: number]: Genre };
}) => {
  console.log(data);
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
};

export default Genres;
