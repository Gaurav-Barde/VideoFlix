import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainContainer = () => {
  return (
    <div className="flex mt-4">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainContainer;
