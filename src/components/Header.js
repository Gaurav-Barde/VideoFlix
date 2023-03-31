import React, { useEffect, useState } from "react";
import Logo from "../assets/img/logo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/redux/menuSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import {
  RxMagnifyingGlass,
  RxCross1,
  RxHamburgerMenu,
  RxAvatar,
} from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getSearchSuggestions();
  }, [searchTerm]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchTerm);
    const json = await data.json();
    setSearchSuggestions(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const clearSearchTermHandler = () => {
    setSearchTerm("");
  };

  return (
    <header className="grid grid-cols-12 items-center">
      <div className="col-span-3 flex items-center">
        <button onClick={toggleMenuHandler}>
          <RxHamburgerMenu className="text-3xl" />
        </button>
        <Link to="/">
          <img alt="logo" src={Logo} className="h-5 mx-2 cursor-pointer" />
        </Link>
      </div>
      <div className="col-span-6 flex justify-center relative">
        <div className="relative  w-1/2">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-slate-150 w-full p-2 rounded-l-md"
          />
          {searchTerm && (
            <button
              onClick={clearSearchTermHandler}
              className="absolute right-1 top-1/2 -translate-y-1/2 p-1"
            >
              <RxCross1 className="text-lg" />
            </button>
          )}
        </div>
        <button className="bg-slate-200 rounded-r-md p-2">
          <RxMagnifyingGlass className="text-2xl" />
        </button>
        {/* Suggestions Modal */}
        {searchTerm && (
          <ul className="absolute top-full w-[calc(50%+2.75rem)] -translate-x-[calc(50%)] left-1/2 bg-slate-50 rounded-md p-3 py-4 transition">
            {searchSuggestions.map((suggestion, index) => (
              <li key={index} className="py-2 flex items-center">
                <RxMagnifyingGlass className="text-xl mr-2" />
                <span className="text-lg">{suggestion}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-span-3 flex justify-end">
        <button className="flex items-center border border-gray-150 p-2 rounded-md">
          <RxAvatar className="text-2xl" />
          <span className="text-sm font-bold ml-1 text-blue-600">Sign in</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
