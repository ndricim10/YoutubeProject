import React, { useEffect, useState } from "react";
import "./watch.scss";
import "../../index.scss";
import { Container, Row, Col } from "react-bootstrap";
import VideoWatch from "./VideoWatch";
import VideoMetaData from "./VideoMetaData/VideoMetaData";
import Comments from "./Comments/Comments";
import VideoHorizontal from "./VideoHorizontal/VideoHorizontal";
import Subscribe from "./Subscribe/Subscribe";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  checkSubscriptionStatus,
  getChannelById,
  getCommentsById,
  getRelatedVideosById,
  getVideoById,
} from "../../Redux/Actions/videosAction";
import moment from "moment";
import ReactLoading from "react-loading";

export default function Watch() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { video, loading } = useSelector((state) => state.videoById);
  const { channel, subscriptionStatus } = useSelector(
    (state) => state.channelById
  );
  const { videos } = useSelector((state) => state.relatedVideos);

  // const channelId = video.snippet.channelId;


  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getChannelById(video?.snippet?.channelId));
    dispatch(getCommentsById(id));
    dispatch(checkSubscriptionStatus(video?.snippet?.channelId));
    dispatch(getRelatedVideosById(id));
    
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <div className="loader">
          <ReactLoading type="bars" height={200} width={175} />
        </div>
      ) : (
        <Container fluid className="watch">
          <Row>
            <Col lg={7} xs={12}>
              <div className="watch_comments">
                <VideoWatch videoId={id} />
                <VideoMetaData video={video} videoId={id} />
                <Subscribe video={channel} subscribed={subscriptionStatus} />
                <div className="video_comments">
                  <Comments video={video} videoId={id} />
                </div>
              </div>
            </Col>

            {/* Related videos */}
            <Col className="watch_related" lg={5} xs={12}>
              <h3>Up next:</h3>
              <Row className="related_template">
                {videos.map((v, i) => {
                  return (
                    <VideoHorizontal
                      video={v}
                      imgUrl={v.snippet?.thumbnails?.default?.url}
                      channelTitle={v.snippet?.channelTitle}
                      title={v.snippet?.title}
                      published={moment(v.snippet?.publishedAt)
                        .startOf("day")
                        .fromNow()}
                    />
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
