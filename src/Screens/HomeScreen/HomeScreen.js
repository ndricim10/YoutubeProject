import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Categories from "../../Components/Categories/Categories";
import VideoCard from "../../Components/VideoCard/VideoCard";
import "./app.scss";
import { useDispatch } from "react-redux";
import {
  getCategoryVideos,
  getPopularVideos,
} from "../../Redux/Actions/videosAction";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import VideoTemplate from "../../Components/VideoCard/VideoTemplate";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.HomeVideos
  );
  function fetchData() {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getCategoryVideos(activeCategory));
    }
  }
  return (
    <Container className="home_screen">
      <div className="categories_absolute">
        <Categories />
      </div>
      <div className="cards">
          <InfiniteScroll
           dataLength={videos.length}
           next={fetchData}
           hasMore={true}
           loader={
              <div className='spinner-border text-danger d-block mx-auto'></div>
           }
           className='row'
           >
            {!loading ? videos.map((video, i) => (
              <Col lg={4} md={6}>
                <VideoCard video={video} key={video.id} />
              </Col>
            )) 
          : [...Array(20)].map(() => (
            <Col lg={4} md={6}>
               <Skeleton />
            </Col>
         ))
          }
          </InfiniteScroll>
      </div>
    </Container>
  );
}
