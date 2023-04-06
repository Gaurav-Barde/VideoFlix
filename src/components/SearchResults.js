import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_BY_SEARCH_QUERY } from "../utils/constants";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";

const SearchResults = () => {
  const [results, setResults] = useState([]);

  const { searchQuery } = useParams();

  useEffect(() => {
    getVideosBySearchTerm();
  }, [searchQuery]);

  const getVideosBySearchTerm = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_BY_SEARCH_QUERY + searchQuery);
      const json = await data.json();
      setResults(json.items);
    } catch (e) {
      console.log("Error is: ", e);
    }
  };

  if (results.length === 0) return <Shimmer />;

  return (
    <div className="flex flex-col justify-center items-center w-full p-4">
      {results.map((result) => (
        <Link
          key={result.etag}
          to={"/watch/" + result.id.videoId}
          className="w-1/2"
        >
          <VideoCard data={result} layout="flex" />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
