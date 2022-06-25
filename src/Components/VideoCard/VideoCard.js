import React from "react";
import "./VideoCard.scss";
import {millify} from 'millify'

export default function VideoCard({}) {
  return (
    <div className="video">
      <div className="video_top">
        <img src="https://cdn.pixabay.com/photo/2017/10/10/21/49/youtuber-2838945_960_720.jpg" />
        <span>05:20</span>
      </div>
      <div className="video_channel_title">
        <img src="https://yt3.ggpht.com/ypqAbDWiOc718gMoxAYbhA8brU_JZN1_V2qQBW1a-DvAyZaUGd2HnxiTl2mhe_KFUl_TvGPk=s68-c-k-c0x00ffffff-no-rj" />
        <span>
          Video Title final project watch and learn Hello world some text some other text, some other other texts
        </span>
      </div>
      <div className="video_all_details">
        <div></div>
        <div>
        <div className="video_channel">
          <span>Ndricim</span>
        </div>
        <div className="video_details">
          <span> {millify(3634446373)} views</span>
          <li>
            <span>5 days ago</span>
          </li>
        </div>
        </div>
      </div>
    </div>
  );
}
