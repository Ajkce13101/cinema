import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./home/Header/Header";
import Footer from "./home/footer/Footer";
import ScrollToTop from "@/components/ScrollToTop";

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
