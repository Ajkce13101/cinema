import Trending from "@/pages/home/Trending/Trending";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Popular from "./Popular/Popular";
import TopRated from "./topRated/TopRated";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Trending></Trending>
      <Popular></Popular>
      <TopRated></TopRated>
      <Footer></Footer>
    </>
  );
};

export default Home;
