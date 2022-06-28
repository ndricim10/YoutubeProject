import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Categories from "../../Components/Categories/Categories";
import VideoCard from "../../Components/VideoCard/VideoCard";
import "./app.scss";
import { useDispatch } from "react-redux";
import { getPopularVideos } from "../../Redux/Actions/videosAction";
import {useSelector} from 'react-redux'

export default function HomeScreen() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const {videos} = useSelector(state=>state.HomeVideos)

  return (
    <Container className="home_screen">
      <div className="categories_absolute">
        <Categories />
      </div>
      <div className="cards">
        <Row>
          {videos.map((video, i) => (
            <Col lg={4} md={6}> 
                <VideoCard video={video} key={video.id}  />
            </Col>
            
          ))}
        </Row>
      </div>
    </Container>
  );
}
