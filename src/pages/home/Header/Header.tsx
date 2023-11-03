import Navitem from "@/components/Navitem";
import { navListData } from "@/data/navListData";
import "./header.css";
import { useState, useEffect } from "react";

import SearchBar from "@/components/Search";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart } from "lucide-react";
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

  return (
    <header className={`header ${pos === "moved" ? "scrolled" : ""}`}>
      <div className="max-container padding-x flex justify-between items-center">
        <div className="flex items-center ">
          <NavLink to="/" className="logo font-extrabold flex justify-center items-center">
            <img src={Cinema} className="w-40"></img>
            {/* Cinema */}
          </NavLink>

          <ul className="nav">
            {navListData.map((item) => (
              <Navitem key={item.id} {...item}></Navitem>
            ))}
          </ul>
        </div>
        {/* <ModeToggle></ModeToggle> */}
        <div className="flex items-center gap-4">
          {" "}
          <SearchBar></SearchBar>
          <Heart className="text-md w-8 h-8"></Heart>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
