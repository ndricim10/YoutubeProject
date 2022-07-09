import React from "react";
import "./SearchVideo.scss";
import "../../../index.scss";
import "../../VideoCard/VideoCard.scss";
import millify from "millify";


export default function SearchVideo({title}) {
  return (
    <div className="search_video">
      <div className="video">
        <div className="video_top">
          <img src="https://cdn.pixabay.com/photo/2017/10/10/21/49/youtuber-2838945_960_720.jpg" />
          <span>05:20</span>
        </div>
        <div className="video_right">
          <div className="video_channel_title">
            <span>
              {title}
            </span>
            <div className="video_details">
              <span> {millify(3634446373)} views</span>
              <li>
                <span>5 days ago</span>
              </li>
            </div>
          </div>

          <div className="video_channel">
            <img src="https://yt3.ggpht.com/ypqAbDWiOc718gMoxAYbhA8brU_JZN1_V2qQBW1a-DvAyZaUGd2HnxiTl2mhe_KFUl_TvGPk=s68-c-k-c0x00ffffff-no-rj" />
            <span>Ndricim</span>
          </div>
          <div className="video_description">
           <span>
           Perpunoi & Ork.: Vani Rushiti Klarinete: Maldin Avduli Kitare:
            Xhuljo Imeri Audio: Eran Production Video: Malespi Pro Connect
            Perpunoi & Ork.: Vani Rushiti Klarinete: Maldin Avduli Kitare:
            Xhuljo Imeri Audio: Eran Production Video: Malespi Pro Connect ...
          
           </span>
           </div>
        </div>
      </div>
    </div>
  );
}
