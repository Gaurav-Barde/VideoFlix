const API_KEY = "AIzaSyAc1M0jU1Xf6UcXtoxdpUI-HGXCnTc90pw";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
  

import {
  RxHome,
  RxPaperPlane,
  RxCardStackPlus,
  RxArchive,
  RxStopwatch,
} from "react-icons/rx";

export const sidebarItems = [
  {
    name: "Home",
    id: 1,
    iconName: RxHome,
  },
  {
    name: "Shorts",
    id: 2,
    iconName: RxPaperPlane,
  },
  {
    name: "Subscriptions",
    id: 3,
    iconName: RxCardStackPlus,
  },
  {
    name: "Library",
    id: 4,
    iconName: RxArchive,
  },
  {
    name: "Watch later",
    id: 5,
    iconName: RxStopwatch,
  },
];
