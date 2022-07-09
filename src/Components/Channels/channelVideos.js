import React from 'react'
import '../../index.scss'
import '../Search/SearchVideo/SearchVideo.scss'
import moment from "moment";
import numeral from "numeral";
import {Link} from 'react-router-dom'

export default function ChannelVideos() {
  return (
    <div className="search_video">
      <div className="video">
        <div className="video_top">
          <img src='' />
          <span>05:20</span>
        </div>
        <div className="video_right">
          <div className="video_channel_title">
            <span>Some title</span>
            <div className="video_details">
              <span> {numeral(636333363).format('0.a')} views</span>
              <li>
                <span>published</span>
              </li>
            </div>
          </div>

          <div className="video_channel">
            <img src='' />
            <span>channel title</span>
          </div>
          <div className="video_description">
            <span>description</span>
          </div>
        </div>
      </div>
    </div>
  )
}
