import { Movie } from "@/hooks/useMovieList";
import moment from "moment";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./carousel.scss";

const Carousel = ({
  data,
  isLoading,
}: {
  data: Movie[] | undefined;
  isLoading: boolean;
}) => {
  const carouselContainer = useRef();

  const navigation = (dir: string) => {
    return;
  };
  return (
    <div>
      <ChevronLeft
        className="carouselLeftNav arrow"
        onClick={() => navigation("left")}
      />
      <ChevronRight
        className="carouselRightNav arrow"
        onClick={() => navigation("right")}
      />
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <div className="carouselItems">
          {data?.map((item) => {
            const Posterurl = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
            return (
              <div className="carouselItem" key={item.id}>
                <div className="posterBlock">
                  <img src={Posterurl}></img>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carousel;
