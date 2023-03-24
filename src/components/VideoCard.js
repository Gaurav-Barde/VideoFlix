import React from "react";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  const { title, channelTitle, thumbnails } = snippet;
  console.log("data:", data);
  return (
    <div className="m-4 cursor-pointer">
      <img
        alt="Thumbnail"
        src={thumbnails.medium.url}
        className="w-80 h-52 bg-slate-100 rounded-md"
      />
      <h3 className="font-semibold max-w-xs text-gray-800 mt-2">
        {title.substring(0, 70)}...
      </h3>
      <h4 className="text-gray-700">{channelTitle}</h4>
      <span className="text-gray-700">
        {Math.floor(statistics.viewCount / 1000)}K views ·
      </span>
      <span> 10 days ago</span>
    </div>
  );
};

export default VideoCard;
