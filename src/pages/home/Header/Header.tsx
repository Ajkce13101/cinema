import Navitem from "@/components/Navitem";
import { navListData } from "@/data/navListData";
import "./header.css";
import { useState, useEffect } from "react";

import SearchBar from "@/components/Search";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Menu } from "lucide-react";
import Cinema from "../../../assets/movix-logo.svg";
const Header = () => {
  const [pos, setPos] = useState("top");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 5) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header
      className={`header ${pos === "moved" ? "scrolled" : ""} ${
        isNavOpen && "bg-black"
      }`}
    >
      <div className="max-container padding-x flex justify-between items-center">
        <div className="flex items-center ">
          <Menu
            className="lg:hidden"
            size={37}
            onClick={() => setIsNavOpen(!isNavOpen)}
          ></Menu>
          <NavLink
            to="/"
            className="logo font-extrabold flex justify-center items-center max-lg:hidden"
          >
            <img src={Cinema} className="w-40"></img>
            {/* Cinema */}
          </NavLink>

          <ul className="nav max-lg:hidden">
            {navListData.map((item) => (
              <Navitem key={item.id} {...item}></Navitem>
            ))}
          </ul>
        </div>
        {/* <ModeToggle></ModeToggle> */}

        <div>
          <NavLink
            to="/"
            className="logo font-extrabold flex justify-center items-center lg:hidden"
          >
            <img src={Cinema} className="w-40"></img>
            {/* Cinema */}
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          {" "}
          <div className="max-lg:hidden">
            <SearchBar></SearchBar>
          </div>
          <Heart className="text-md w-8 h-8 "></Heart>
          <Avatar className="">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div
        className={` max-container padding-x lg:hidden pt-2 transition-all ease-in-out ${
          isNavOpen ? "visible " : "hidden"
        }`}
      >
        <ul
          className="flex flex-col gap-2"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {navListData.map((item) => (
            <Navitem key={item.id} {...item}></Navitem>
          ))}
        </ul>
        <div className="pt-3 pb-5">
          <SearchBar
            mobile={true}
            setIsNavOpen={setIsNavOpen}
            isNavOpen={isNavOpen}
          ></SearchBar>
        </div>
      </div>
    </header>
  );
};

export default Header;
