import React, { useEffect, useState } from "react";
import Logo from "../assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/redux/menuSlice";
import { cacheSuggestions } from "../utils/redux/suggestionsCacheSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import {
  RxMagnifyingGlass,
  RxCross1,
  RxHamburgerMenu,
  RxAvatar,
} from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestionCache = useSelector((store) => store.suggestionsCache);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("click", hideSuggestions);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const hideSuggestions = (e) =>
    e.target.nodeName !== "UL" && setShowSuggestions(false);

  const getSearchSuggestions = async () => {
    if (suggestionCache[searchTerm]) {
      setSearchSuggestions(suggestionCache[searchTerm]);
    } else {
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchTerm);
      const json = await data.json();
      setSearchSuggestions(json[1]);
      dispatch(cacheSuggestions({ [searchTerm]: json[1] }));
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const clearSearchTermHandler = () => {
    setSearchTerm("");
  };

  const suggestionClickHandler = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const searchButtonHandler = () => {
    navigate("results/" + searchTerm);
  };

  const searchOnchangeHandler = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
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
            onChange={searchOnchangeHandler}
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
        {/* Suggestions Modal */}
        {showSuggestions && searchTerm && (
          <ul className="absolute top-full w-[calc(50%+2.75rem)] left-1/2 -translate-x-[calc(50%)] bg-slate-50 rounded-md p-3 py-4 transition shadow-md">
            {searchSuggestions.map((suggestion, index) => (
              <Link key={index} to={"results/" + suggestion}>
                <li
                  onClick={() => suggestionClickHandler(suggestion)}
                  className="py-2 flex items-center cursor-pointer"
                >
                  <RxMagnifyingGlass className="text-xl mr-2" />
                  <span className="text-lg">{suggestion}</span>
                </li>
              </Link>
            ))}
          </ul>
        )}
        <button
          className="bg-slate-200 rounded-r-md p-2"
          onClick={searchButtonHandler}
        >
          <RxMagnifyingGlass className="text-2xl" />
        </button>
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
