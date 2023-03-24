import React, { useState } from "react";
import MenuIcon from "../assets/img/menu-icon.png";
import Logo from "../assets/img/logo.png";
import UserIcon from "../assets/img/user-icon.png";
import SearchIcon from "../assets/img/search-icon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/redux/menuSlice";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="grid grid-cols-12 items-center">
      <div className="col-span-3 flex items-center">
        <button onClick={toggleMenuHandler}>
          <img alt="menu" src={MenuIcon} className="h-6 mr-4 cursor-pointer" />
        </button>
        <img alt="logo" src={Logo} className="h-5 mx-2 cursor-pointer" />
      </div>
      <div className="col-span-6 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-slate-150 w-1/2 p-2 rounded-l-md"
        />
        <button className="bg-slate-200 rounded-r-md p-2">
          <img alt="search" src={SearchIcon} className="h-6" />
        </button>
      </div>
      <div className="col-span-3 flex justify-end">
        <button className="flex items-center border border-gray-150 p-1 rounded-md">
          <img alt="user" src={UserIcon} className="h-6" />
          <span className="text-sm font-bold ml-1 text-blue-600">Sign in</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
