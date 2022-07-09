import React from "react";
import "./Channel.scss";
import ChannelVideos from "./channelVideos";
import { Row, Col } from "react-bootstrap";

export default function Channels() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="channels">
      <h1>Channels</h1>

      <Row>
        {numbers.map((video) => {
          return (
            <Col sm={6} md={4} lg={3} className="channels_videos">
              <ChannelVideos />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
