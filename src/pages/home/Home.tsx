import Trending from "@/pages/home/Trending/Trending";
import Banner from "./Banner/Banner";
import Popular from "./Popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Trending></Trending>
      <Popular></Popular>
      <TopRated></TopRated>
    </>
  );
};

export default Home;
