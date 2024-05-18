import MovieCard from "@/components/movieCard/MovieCard";
import { useDiscoverMovie } from "@/hooks/useDiscoverMovies";
import { UseMovieGenres } from "@/hooks/useMovieGenres";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { ClipLoader } from "react-spinners";
import "./explore.scss";

interface Genres {
  id: number;
  name: string;
}

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
  const [sort, setSort] = useState<{ value: string; label: string } | string>();
  const [genreArray, setGenreArray] = useState<number[]>();

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useDiscoverMovie({
      type: type || "movie",
      sort: { label: "Popularity desc", value: "popularity.desc" },
      genre: genreValue,
      genreArray: genreArray,
    });

  const { data: genresData, isLoading: genreLoading } = UseMovieGenres({
    mediatype: type || "movie",
  });

  useEffect(() => {
    if (genre) {
      const genreNames = genre.map((genr) => genr.id);
      setGenreArray(genreNames);
      const csvGenres = genreNames.join("%2C").toLowerCase();
      setGenreValue(csvGenres);
    }
  }, [genre]);

  useEffect(() => {
    setGenre([]);
    setGenreValue("");
    setSort("");
  }, [type]);

  const fetchMoviesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <div className="max-container padding-x mt-36">
      <div className="flex justify-between max-lg:flex-col max-md:gap-10">
        <h1 className="font-bold text-3xl">
          Explore <span>{type === "movie" ? "Movies" : "Tv Shows"}</span>
        </h1>
        <div className="flex filters gap-10 max-md:flex-col max-md:gap-2 ">
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
                onChange={(selectedItems) =>
                  setGenre(selectedItems.map((item) => item as Genres))
                }
              />
            )}
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
        <div className="flex flex-wrap justify-between md:gap-10 pt-[25px] ">
          {data?.pages.map((page) => {
            return (
              <React.Fragment key={page.page}>
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
