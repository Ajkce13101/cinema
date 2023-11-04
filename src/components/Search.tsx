import { Search } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = ({
  mobile,
  setIsNavOpen,
  isNavOpen,
}: {
  mobile?: boolean;
  setIsNavOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isNavOpen?: boolean;
}) => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();
  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue.length > 0) {
      navigate(`/search/${searchValue}`);
      setIsNavOpen(!isNavOpen);
    }
  };

  return (
    <div className={`relative w-[300px] h-[40px] ${mobile && "w-full"}`}>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={searchHandler}
        className={`relative left-0 top-0 w-full h-full text-white bg-transparent border border-gray-400 outline-none rounded-md  pl-9 pr-3 backdrop-blur-md placeholder:gray-300 ${
          mobile && " border-gray-400"
        }`}
      />
      <Search className="absolute top-0 bottom-0 m-auto left-3 pr-3 pt-0 pb-0  text-gray-300  w-[30px]"></Search>
    </div>
  );
};

export default SearchBar;
