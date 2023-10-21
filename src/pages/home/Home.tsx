import Trending from "@/pages/home/Trending/Trending";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Popular from "./Popular/Popular";
import TopRated from "./topRated/TopRated";
import Footer from "./footer/Footer";

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
