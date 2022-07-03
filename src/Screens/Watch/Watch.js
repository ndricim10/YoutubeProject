import React from "react";
import "./watch.scss";
import { Container, Row, Col } from "react-bootstrap";
import VideoTemplate from "../../Components/VideoCard/VideoTemplate";
import VideoWatch from "./VideoWatch";
import VideoMetaData from "./VideoMetaData/VideoMetaData";
import Comments from "./Comments/Comments";
import VideoHorizontal from "./VideoHorizontal/VideoHorizontal";

export default function Watch() {
  return (
    <Container fluid className="watch">
      <Row>
        <Col lg={7} xs={12}>
          <div className="watch_comments">
            <VideoWatch />
            <VideoMetaData />
            
            <div className="video_comments">
              <Comments />
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
