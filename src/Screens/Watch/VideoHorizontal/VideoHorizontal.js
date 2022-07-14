import React, { useEffect, useState } from "react";
import "../../../Components/VideoCard/VideoCard.scss";
import numeral from "numeral";
import request from "../../../api";
import moment from "moment";
import "../../../index.scss";
import { Link } from "react-router-dom";

export default function VideoHorizontal({
  video,
  imgUrl,
  channelTitle,
  title,
  published,
}) {
  const { id } = video;
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);

  const _videoId = id?.videoId || id;

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
      setDuration(items[0].contentDetails?.duration);
      setViews(items[0].statistics?.viewCount);
    };
    get_video_details();
  }, [id]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <div className="video">
      <Link to={`/watch/${_videoId}`} className="a">
        <div className="video_top">
          <img src={imgUrl} />
          <span>{_duration}</span>
        </div>
      </Link>
      <div>
        <Link to={`/watch/${_videoId}`} className="a">
          <div className="video_channel_title">
            <span>{title}</span>
          </div>
        </Link>
        <div className="video_all_details">
          <div></div>
          <div>
            <div className="video_channel">
              <span>{channelTitle}</span>
            </div>
            <div className="video_details">
              <span> {numeral(views).format("0.a")} views</span>
              <li>
                <span>{published}</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
