import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ data, layout }) => {
  const { snippet, id } = data;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className={`cursor-pointer mb-6 ${layout && "flex bg-slate-50 p-1"}`}>
      <img
        alt="Thumbnail"
        src={thumbnails.medium.url}
        className={`rounded-md mr-4 object-contain ${
          layout ? "w-1/2" : "w-80"
        }`}
      />
      <div className={layout && "flex-1"}>
        <h3
          className={`font-semibold max-w-xs text-gray-800 mt-2 ${
            layout && "max-w-none"
          }`}
        >
          {title}
        </h3>
        <h4 className="text-gray-600">{channelTitle}</h4>
        {data.statistics && (
          <span className="text-gray-700">
            {Math.floor(data?.statistics?.viewCount / 1000)}K views ·
          </span>
        )}
        <span> 10 days ago</span>
      </div>
    </div>
  );
};

export default VideoCard;
