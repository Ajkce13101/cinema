import MovieCard from "@/components/movieCard/MovieCard";
import { useSearchMovie } from "@/hooks/useSearchMovie";
import { useParams } from "react-router-dom";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDiscoverMovie } from "@/hooks/useDiscoverMovies";
import { useState, useEffect } from "react";
import Select from "react-select";
import "./explore.scss";
import { Genres, UseMovieGenres } from "@/hooks/useMovieGenres";
import { Genre } from "@/hooks/useMovieDetails";

const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];
const Explore = () => {
  const { type } = useParams();

  const [genre, setGenre] = useState<Genres[]>();
  const [genreValue, setGenreValue] = useState("");
  const [sort, setSort] = useState<{ value: string; label: string }>();
  const [dataType, setDataType] = useState("");

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useDiscoverMovie({
    type: type || "movie",
    sort: sort || { label: "Popularity desc", value: "popularity.desc" },
    genre: genreValue,
  });

  const { data: genresData, isLoading: genreLoading } = UseMovieGenres({
    mediatype: type || "movie",
  });

  useEffect(() => {
    if (genre) {
      const genreNames = genre.map((genr) => genr.id);
      const csvGenres = genreNames.join("%2C").toLowerCase();
      setGenreValue(csvGenres);
    }
  }, [genre]);

  useEffect(() => {
    setGenre([]);
    setGenreValue("");
    setSort("");
    setDataType(type);
  }, [type]);

  const fetchMoviesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <div className="max-container padding-x mt-36">
      <div className="flex justify-between ">
        <h1 className="font-bold text-3xl">
          Explore <span>{type === "movie" ? "Movies" : "Tv Shows"}</span>
        </h1>
        <div className="flex filters gap-10">
          <div>
            {!genreLoading && genresData?.genres && (
              <Select
                isMulti
                name="genres"
                value={genre}
                closeMenuOnSelect={false}
                options={genresData?.genres}
                getOptionLabel={(option) => option?.name || ""}
                getOptionValue={(option) => option?.id.toString() || ""}
                placeholder="Select genres"
                className="react-select-container genresDD"
                classNamePrefix="react-select"
                onChange={(selectedItems) => setGenre(selectedItems)}
              />
            )}
          </div>
          <div>
            <Select
              name="sortby"
              value={sort}
              options={sortbyData}
              isClearable={true}
              placeholder="Sort by"
              className=" react-select-container sortbyDD "
              classNamePrefix="react-select"
              onChange={(selectedItems) => setSort(selectedItems)}
            />
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={fetchMoviesCount}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={""}
      >
        {isLoading && (
          <div className="flex h-[70vh] w-full text-center items-center justify-center">
            <ClipLoader color="white"></ClipLoader>
          </div>
        )}
        <div className="flex flex-wrap justify-between gap-10 pt-[25px] ">
          {data?.pages.map((page) => {
            return (
              <React.Fragment>
                {page.results.map((movie) => {
                  if (movie.poster_path) {
                    return (
                      <>
                        <MovieCard
                          key={movie.id}
                          item={movie}
                          Paramtype={type || "movie"}
                        ></MovieCard>
                      </>
                    );
                  }
                })}
              </React.Fragment>
            );
          })}
        </div>
        {isFetchingNextPage && (
          <div className="w-full text-center pt-20">
            <ClipLoader color="white"></ClipLoader>
          </div>
        )}
      </InfiniteScroll>
    </div>
  );
};

export default Explore;
