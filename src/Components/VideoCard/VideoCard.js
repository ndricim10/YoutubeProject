import React, { useEffect, useState } from "react";
import "./VideoCard.scss";
import '../../index.scss'
import moment from "moment";
import request from "../../api";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate, Link } from "react-router-dom";

export default function VideoCard({ video }) {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const navigate = useNavigate();

  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;

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
      setChannelIcon(items[0].snippet.thumbnails.default);
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
    <Link to={`watch/${_videoId}`}>
    <div className="video" >
      <div className="video_top">
        <img src={medium.url} />
        <span>{_duration}</span>
      </div>
      <div className="video_channel_title">
        <img src={channelIcon?.url} />
        <span>{title}</span>
      </div>
      <div className="video_all_details">
        <div></div>
        <div>
          <div className="video_channel">
            <span>{channelTitle}</span>
          </div>
          <div className="video_details">
            <span> {numeral(views).format("0.a")} views</span>
            <li>
              <span>{moment(publishedAt).fromNow()}</span>
            </li>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
