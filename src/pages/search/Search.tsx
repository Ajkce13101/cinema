import MovieCard from "@/components/movieCard/MovieCard";
import { useSearchMovie } from "@/hooks/useSearchMovie";
import { useParams } from "react-router-dom";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Search = () => {
  const { searchQuery } = useParams();

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useSearchMovie({ query: searchQuery || "" });

  const fetchMoviesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  console.log(fetchMoviesCount);
  return (
    <div className="max-container padding-x mt-20">
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
        <div className="flex flex-wrap justify-between gap-10 pt-[60px] ">
          {data?.pages.map((page) => {
            return (
              <React.Fragment>
                {page.results.map((movie) => {
                  if (movie.media_type === "person") return;
                  if (movie.poster_path) {
                    return (
                      <>
                        <MovieCard
                          key={movie.id}
                          item={movie}
                          Paramtype={movie.media_type}
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

export default Search;
