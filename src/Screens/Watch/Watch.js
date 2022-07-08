import React, { useEffect } from "react";
import "./watch.scss";
import { Container, Row, Col } from "react-bootstrap";
import VideoTemplate from "../../Components/VideoCard/VideoTemplate";
import VideoWatch from "./VideoWatch";
import VideoMetaData from "./VideoMetaData/VideoMetaData";
import Comments from "./Comments/Comments";
import VideoHorizontal from "./VideoHorizontal/VideoHorizontal";
import Subscribe from "./Subscribe/Subscribe";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChannelById, getVideoById } from "../../Redux/Actions/videosAction";

export default function Watch() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { video, loading } = useSelector((state) => state.videoById);
  const { channel, loadingChannel } = useSelector((state) => state.channelById);

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getChannelById(video.snippet.channelId))
  }, [dispatch, id]);

  return (
    <Container fluid className="watch">
      <Row>
        <Col lg={7} xs={12}>
          <div className="watch_comments">
            <VideoWatch videoId={id} />
            <VideoMetaData video={video} videoId={id} />
            <Subscribe video={channel}/>
            <div className="video_comments">
              <Comments video={video} videoId={id} />
            </div>
          </div>
        </Col>

        {/* Related videos */}
        <Col className="watch_related" lg={5} xs={12}>
          {/* <Categories /> */}
          <Row className="related_template">
            {[...new Array(20)].map((e, i) => (
              <Col xs={12}>
                <>
                  <div key={i}>
                    <VideoHorizontal />
                  </div>
                </>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
