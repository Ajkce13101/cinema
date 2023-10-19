import Navitem from "@/components/Navitem";
import { navListData } from "@/data/navListData";
import "./header.css";
import { ModeToggle } from "@/components/mode-toggle";
import SearchBar from "@/components/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="max-container padding-x flex justify-between items-center">
        <a href="/" className="logo">
          Cinema
        </a>
        <ul className="nav">
          {navListData.map((item) => (
            <Navitem key={item.id} {...item}></Navitem>
          ))}
        </ul>
        <SearchBar></SearchBar>
        <ModeToggle></ModeToggle>
      </div>
    </header>
  );
};

export default Header;
