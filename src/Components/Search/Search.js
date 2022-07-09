import React, { useEffect } from "react";
import "./Search.scss";
import SearchVideo from "./SearchVideo/SearchVideo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedVideos } from "../../Redux/Actions/videosAction";

export default function Search() {
  const { query } = useParams();
  const dispatch = useDispatch();
  const {results} = useSelector(state=>state.searchVideo)

  console.log(results);
  useEffect(() => {
    dispatch(getSearchedVideos(query));
  }, [dispatch, query]);
  return (
    <div className="search_results">
      {
        results.map((video, i)=>{
          return(
            <SearchVideo
          title={video.snippet?.title}
          />
          )
        })
      }
    </div>
  );
}
