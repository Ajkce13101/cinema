

import Carousel from "@/components/carousel/Carousel";
import { useSimiliarMovies } from "@/hooks/useSimiliarMovies";

const SimiliarMovies = ({ type, id }: { type: string; id: number }) => {
  const { data, isLoading } = useSimiliarMovies({ type: type, id: id });

  return (
    <section className="relative overflow-hidden pt-20">
      <div className="">
        <div className="flex justify-between">
          <div className="flex-1">
            <h1 className="relative section-effect capitalize font-bold text-2xl pt-4">
              Similar {type}s
            </h1>
          </div>
        </div>
        <Carousel
          data={data?.results}
          isLoading={isLoading}
          type="movie"
        ></Carousel>
      </div>
    </section>
  );
};

export default SimiliarMovies;
