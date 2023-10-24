import { Search } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();
  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue.length > 0) {
      navigate(`/search/${searchValue}`);
    }
  };

  return (
    <div className="relative w-[300px] h-[40px]">
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={searchHandler}
        className="relative left-0 top-0 w-full h-full text-white bg-transparent border border-[rgba(255, 255, 255, 0,5)] outline-none rounded-sm  pl-12 pr-3 backdrop-blur-md placeholder:text-white"
      />
      <Search className="absolute top-0 bottom-0 m-auto left-3 pr-3 pt-0 pb-0  text-white border-r border-white w-[30px]"></Search>
    </div>
  );
};

export default SearchBar;
