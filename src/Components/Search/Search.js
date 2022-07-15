import React, { useEffect } from "react";
import "./Search.scss";
import SearchVideo from "./SearchVideo/SearchVideo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedVideos } from "../../Redux/Actions/videosAction";
import moment from "moment";
import ReactLoading from "react-loading";

export default function Search() {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { results, loading } = useSelector((state) => state.searchVideo);

  useEffect(() => {
    dispatch(getSearchedVideos(query));
  }, [dispatch, query]);
  return (
    <>
      {loading ? (
        <div className="loader">
          <ReactLoading type="bars" height={200} width={175} />
        </div>
      ) : (
        <div className="search_results">
          {results.map((video, i) => {
            return (
              <SearchVideo
                title={video.snippet?.title}
                published={moment(video.snippet?.publishedAt)
                  .startOf("day")
                  .fromNow()}
                description={video.snippet?.description}
                img={video.snippet?.thumbnails?.default?.url}
                channelTitle={video.snippet?.channelTitle}
                videoId={video.id?.videoId}
                video={video}
                channelId={video.snippet?.channelId}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
