import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Categories from "../../Components/Categories/Categories";
import VideoCard from '../../Components/VideoCard/VideoCard'

export default function HomeScreen() {
  return (
    <Container>
      <Categories />
      <Row>
        {[...new Array(100)].map((e, i) => (
          <Col lg={3} md={4} sm={6}>
            <VideoCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
