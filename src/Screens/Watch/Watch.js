import React from "react";
import "./watch.scss";
import { Container, Row, Col } from "react-bootstrap";
import VideoTemplate from "../../Components/VideoCard/VideoTemplate";
import VideoWatch from "./VideoWatch";
import Categories from '../../Components/Categories/Categories'

export default function Watch() {
  return (
    <Container fluid className="watch">
      <Row>
        <Col className="watch_comments" lg={7} xs={12}>
          <VideoWatch />
        </Col>

        {/* Related videos */}
        <Col className="watch_related" lg={5} xs={12}>
        {/* <Categories /> */}
          <Row className="related_template">
            {[...new Array(200)].map((e, i) => (
              <Col xs={12}>
                <>
                
                <div key={i}>
                  <VideoTemplate />
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
