import React, { useEffect, useState } from "react";
import "./SearchVideo.scss";
import "../../../index.scss";
import "../../VideoCard/VideoCard.scss";
import request from "../../../api";
import moment from "moment";
import numeral from "numeral";
import {Link} from 'react-router-dom'

export default function SearchVideo({
  title,
  videoId,
  img,
  published,
  description,
  channelTitle,
  video,
  channelId
}){

  const {
    id,
    contentDetails,
  } = video;

  const [views, setViews] = useState(null);
const [duration, setDuration] = useState(null);
const [channelIcon, setChannelIcon] = useState(null);

 useEffect(() => {
    const get_video_detail = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet?.thumbnails?.default);
    };
    get_video_detail();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || contentDetails?.videoId || id;
  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [_videoId]);

  return (
    <Link className="a" to={`/watch/${_videoId}`}>
    <div className="search_video">
      <div className="video">
        <div className="video_top">
          <img src={img} />
          <span>{_duration}</span>
        </div>
        <div className="video_right">
          <div className="video_channel_title">
            <span>{title}</span>
            <div className="video_details">
              <span> {numeral(views).format('0.a')} views</span>
              <li>
                <span>{published}</span>
              </li>
            </div>
          </div>

          <div className="video_channel">
            <img src={channelIcon?.url}/>
            <span>{channelTitle}</span>
          </div>
          <div className="video_description">
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
