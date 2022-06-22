import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Categories from "../../Components/Categories/Categories";
import VideoCard from '../../Components/VideoCard/VideoCard'
import './app.scss'

export default function HomeScreen() {
  return (
    <Container className="home_screen">
      <div className="categories_absolute">
      <Categories />
      </div>
     <div className="cards">
     <Row>
        {[...new Array(200)].map((e, i) => (
          <Col lg={3} md={4} sm={6} xs={12}>
            <VideoCard />
          </Col>
        ))}
      </Row>
     </div>
    </Container>
  );
}
