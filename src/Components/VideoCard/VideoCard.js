import React, { useEffect, useState } from "react";
import "./VideoCard.scss";
import { millify } from "millify";
import moment from "moment";
import request from "../../api";

export default function VideoCard({ video }) {

  const [channelIcon, setChannelIcon] = useState(null)
  const {
    id,
    contentDetails:{
      duration
    },
    snippet: {
      channelId,
      channelTitle,
      publishedAt,
      thumbnails: { medium },
      title
    },
    statistics:{
      viewCount
    }
  } = video;

  useEffect(()=>{
    const get_video_detail = async ()=>{
      const{
        data:{items},
      } = await request('/channels',{
        params:{
          part: "snippet",
          id: channelId,
        }
      })
      setChannelIcon(items[0].snippet.thumbnails.default)
    }
    get_video_detail()
  }, [channelId])

  let dur = moment.duration(duration).asSeconds()
  let _duration = moment.utc(dur * 1000).format("mm:ss")
  console.log(channelIcon.url);

  return (
    <div className="video">
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
            <span> {millify(viewCount)} views</span>
            <li>
              <span>{moment(publishedAt).fromNow()}</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
