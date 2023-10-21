import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./home/Header/Header";
import Footer from "./home/footer/Footer";

const HomeLayout = () => {
  return (
    <>
      <Header></Header>
      <section className="">

      <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </>
  );
};

export default HomeLayout;
