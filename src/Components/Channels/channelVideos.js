import React, { useEffect, useState } from "react";
import "../../index.scss";
import "../Search/SearchVideo/SearchVideo.scss";
import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { getVideoById } from "../../Redux/Actions/videosAction";
import { useDispatch, useSelector } from "react-redux";
import request from "../../api";

export default function ChannelVideos({ video }) {
  const dispatch = useDispatch();
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const {
    id,
    snippet: {
      title,
      publishedAt,
      thumbnails: { medium },
      channelTitle,
    },
    contentDetails,
  } = video;

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
    <Link to={`/watch/${_videoId}`} className='a'>
    <div className="search_video">
      <div className="video">
        <div className="video_top">
          <img src={medium?.url} />
          <span>{_duration}</span>
        </div>
        <div className="video_right">
          <div className="video_channel_title">
            <span>{title}</span>
            <div className="video_details">
              <span> {numeral(views).format("0.aa")} views</span>
              <li>
                <span>{moment(publishedAt).startOf("day").fromNow()}</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
