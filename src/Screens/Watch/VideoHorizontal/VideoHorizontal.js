import React, { useEffect, useState } from "react";
import "../../../Components/VideoCard/VideoCard.scss";
import numeral from "numeral";
import request from '../../../api'
import moment from "moment";
import '../../../index.scss'
import {Link} from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function VideoHorizontal({
  video,
  imgUrl,
  channelTitle,
  title,
  published
}) {


  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const {
    id,
    contentDetails,
  } = video;

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

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Link to={`/watch/${_videoId}`} className='a'>
      <div className="video">
      <div className="video_top">
        <LazyLoadImage effect='blur' src={imgUrl} />
        <span>{_duration}</span>
      </div>
      <div>
        <div className="video_channel_title">
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
                <span>{published}</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}