import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if (!videos.length) return <Shimmer />;

  return (
    <div className="flex flex-wrap mr-4 box-border overflow-x-hidden">
      {videos.map((item) => (
        <Link key={item.id} to={"watch/" + item.id}>
          <VideoCard data={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
