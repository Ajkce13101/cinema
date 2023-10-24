import { Cast } from "@/hooks/useMovieDetails";
import React from "react";
import DefaultAvatar from "../../assets/avatar.png";

const CastAvatar = ({ people }: { people: Cast }) => {
  const src = `${
    people.profile_path
      ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
      : DefaultAvatar
  }`;
  return (
    <div className="min-w-[200px]">
      <img
        src={src}
        alt=""
        className="rounded-full w-[200px] h-[200px] object-cover origin-top bg-top"
      />
      <p className="text-center pt-4 text-lg font-bold">{people.name}</p>
      <p className="text-center text-slate-400 pt-1 ">{people.character}</p>
    </div>
  );
};

export default CastAvatar;
