import React, { useEffect, useState } from "react";
import { RxModulzLogo } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { YOUTUBE_VIDEO_BY_ID_API } from "../utils/constants";
import { closeMenu } from "../utils/redux/menuSlice";

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { videoId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    getVideoDetails(videoId);
    dispatch(closeMenu());
    window.addEventListener("resize", adjustWindowWidth);
  }, []);

  const getVideoDetails = async (videoId) => {
    const data = await fetch(YOUTUBE_VIDEO_BY_ID_API + videoId);
    const json = await data.json();
    setVideoDetails(json.items[0]);
  };

  const adjustWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div className="p-2">
      <iframe
        width={windowWidth / 1.2}
        height={windowWidth / 3}
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
      <div className="p-2">
        <h2 className="max-w-[600px] text-lg font-semibold">
          {videoDetails?.snippet?.title}
        </h2>
        <div className="flex items-center my-2">
          <div className="border border-slate-700 rounded-full p-2 mr-2">
            <RxModulzLogo className="text-2xl" />
          </div>
          <h3 className="font-semibold text-lg">
            {videoDetails?.snippet?.channelTitle}
          </h3>
        </div>
        <div className="font-semibold text-sm mt-2 bg-slate-100 text-gray-800 p-1 px-4 inline-block rounded-sm">
          <span>
            {Math.floor(videoDetails?.statistics?.viewCount / 1000)}K views
          </span>
          <span className="ml-2">
            Published at:
            {" " +
              videoDetails?.snippet?.publishedAt
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("-")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
