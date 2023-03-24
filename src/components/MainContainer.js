import React from "react";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex mt-4">
      <Sidebar />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
