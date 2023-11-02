import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";
import Header from "./home/Header/Header";
import Footer from "./home/footer/Footer";

const HomeLayout = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <section className="">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </>
  );
};

export default HomeLayout;
