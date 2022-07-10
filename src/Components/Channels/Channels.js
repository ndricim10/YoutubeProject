import React, { useEffect } from "react";
import "./Channel.scss";
import ChannelVideos from "./channelVideos";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getChannelById,
  getVideoChannelsById,
} from "../../Redux/Actions/videosAction";
import Subscribe from '../../Screens/Watch/Subscribe/Subscribe'
import ReactLoading from "react-loading";

export default function Channels() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { channelId } = useParams();
  const dispatch = useDispatch();
  const {videos, loading} = useSelector(state=>state.videosByChannel)
  const { channel } = useSelector((state) => state.channelById);

  useEffect(() => {
    dispatch(getVideoChannelsById(channelId));
    dispatch(getChannelById(channelId));
  }, [channelId]);

  return (
    <>
    {
      !loading ? (<div className="channels">
      <div className="channel_details">
        <Subscribe video={channel} />
      </div>

      <Row>
        {videos.map((video) => {
          return (
            <Col sm={6} md={4} lg={3} className="channels_videos">
              <ChannelVideos video={video} />
            </Col>
          );
        })}
      </Row>
    </div>) : <div className="loader">
          <ReactLoading type="bars" height={200} width={175} />
        </div>
    }
    </>
  );
}
