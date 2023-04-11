import React, { useEffect, useState } from "react";
import { RxModulzLogo } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  YOUTUBE_VIDEO_BY_ID_API,
  YOUTUBE_COMMENTS_API,
} from "../utils/constants";
import { closeMenu } from "../utils/redux/menuSlice";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import { formatString } from "../utils/helper";

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [comments, setcomments] = useState([]);
  const [liveChatActive, setLiveChatActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { videoId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getVideoDetails(videoId);
    getCommentsData();
    dispatch(closeMenu());
    window.addEventListener("resize", adjustWindowWidth);
  }, []);

  const getVideoDetails = async (videoId) => {
    const data = await fetch(YOUTUBE_VIDEO_BY_ID_API + videoId);
    const json = await data.json();
    setVideoDetails(json.items[0]);
  };

  const getCommentsData = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API + videoId);
    const json = await data.json();
    setcomments(json.items);
  };

  const adjustWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div className="p-2 w-full">
      <div className="flex items-center justify-between w-full">
        <iframe
          width={liveChatActive ? windowWidth / 1.25 : windowWidth / 1.2}
          height={windowWidth / 3}
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
        {windowWidth > 800 && (
          <div>
            {!liveChatActive ? (
              <button
                onClick={() => setLiveChatActive(true)}
                className={`border-2 border-gray-400 px-2 py-1 rounded-md text-sm font-bold ml-1 text-red-500`}
              >
                Go Live
              </button>
            ) : (
              <LiveChat
                height={windowWidth / 3}
                setLiveChatActive={setLiveChatActive}
              />
            )}
          </div>
        )}
      </div>
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
        <div className="font-semibold text-sm mt-2 bg-slate-200 text-gray-800 p-4 px-4 inline-block rounded-sm">
          <span>
            {Math.floor(videoDetails?.statistics?.viewCount / 1000)}K views
          </span>
          <span className="ml-2">
            {"Published at: " +
              formatString(videoDetails?.snippet?.publishedAt)}
          </span>
        </div>
      </div>
      {comments.length && (
        <div className="mt-4 p-2">
          <h1 className="font-semibold mb-4">{comments.length} Comments</h1>
          {comments.map((comment) => (
            <div key={comment.id} className="mb-8">
              <Comments
                data={comment}
                snippet={comment.snippet.topLevelComment.snippet}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchPage;
