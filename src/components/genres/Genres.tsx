import React from "react";
import "./genres.scss";
import { Genre } from "@/hooks/useMovieDetails";

const Genres = ({
  data,
  genres,
}: {
  data: number[] | undefined;
  genres: { [key: number]: Genre };
}) => {
  console.log(data);
  console.log(genres);

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
