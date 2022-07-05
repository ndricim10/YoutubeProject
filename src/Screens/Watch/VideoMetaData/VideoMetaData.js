import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Likes from "../Likes/Likes";
import "./VideoMetaData.scss";
import Download from "../Likes/Download";
import { BsThreeDots } from "react-icons/bs";
import ThreeDotsAbsolute from "../Likes/ThreeDotsAbsolute";
import WindowSize from "../../../WindowSize";
import { useDispatch, useSelector } from "react-redux";
import "../../../index.scss";
import { useParams } from "react-router-dom";
import { getVideoById } from "../../../Redux/Actions/videosAction";
import moment from "moment";

export default function VideoMetaData({video, videoId}) {
  const [more, setMore] = useState(false);
  const { width } = WindowSize();
  const [fullLikes, setFullLikes] = useState(false);
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getVideoById(videoId))
  }, [dispatch, videoId])

  function showMore() {
    setMore((prev) => !prev);
    setFullLikes(false)
  }
  function showFullLikes() {
    setFullLikes(prev=>!prev)
  }

  return (
    <div className="videoMetaData">
      <span className="title">
        {video?.snippet?.title} 
      </span>
      <Row>
        <Col lg={more ? 12 : 5} className="videoMetaData_details">
          <span className="views_date">
            <span className="views">
              {/* {statistics.viewCount} */}
             1000 views</span>
            <span className="date">
              {/* {moment(snippet?.publishedAt).format('ll')} */}
              march 29
            </span>
          </span>
          <span className="videoDescription">
          {video?.snippet?.description?.length < 100 && !more
              ? video?.snippet?.description
              : video?.snippet?.description?.substring(0, 100)}
          </span>
          <span className="videoDescription">{more && video?.snippet?.description}</span>
          {video?.snippet?.description?.length >= 100 && (
            <span className="videoMetaData_more" onClick={showMore}>
              {more ? "Show less" : "Show more"}
            </span>
          )}
        </Col>
        {width > 992 && (
          <Col lg={more ? 12 : 7} className="video_likes">
            <Likes size={!more ? 20 : 25} />
            {more && <Download size={!more ? 20 : 25} />}
            {!more && (
              <>
                <div className="threeDotsRelative" onClick={showFullLikes}>
                  <BsThreeDots size={!more ? 20 : 25} />
                  {fullLikes && (
                    <div
                      className={
                        darkMode
                          ? "ThreeDotsAbsolute1 light-mode"
                          : "ThreeDotsAbsolute1 dark-mode"
                      }
                    >
                      <ThreeDotsAbsolute size={!more ? 20 : 25} />
                    </div>
                  )}
                </div>
              </>
            )}

            {more && <BsThreeDots size={!more ? 20 : 25} />}
          </Col>
        )}
        {width <= 992 && (
          <Col lg={12} className="video_likes">
            <Likes size={25} />
            <Download size={25} />
            <BsThreeDots size={25} />
          </Col>
        )}
      </Row>
    </div>
  );
}
