import React from "react";

const data = new Array(20).fill("");

const Shimmer = () => {
  return (
    <div className="flex flex-wrap ml-4">
      {data.map((item, index) => (
        <div key={index} className="w-80 h-64 bg-slate-300 m-2"></div>
      ))}
    </div>
  );
};

export default Shimmer;
