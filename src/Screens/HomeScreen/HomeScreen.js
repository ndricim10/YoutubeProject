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
          <Col lg={4} md={6} >
            <div key={i}>
            <VideoCard />
            </div>
          </Col>
        ))}
      </Row>
     </div>
    </Container>
  );
}
