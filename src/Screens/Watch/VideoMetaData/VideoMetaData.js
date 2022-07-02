import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Likes from "../Likes/Likes";
import "./VideoMetaData.scss";
import Download from "../Likes/Download";
import { BsThreeDots } from "react-icons/bs";
import ThreeDotsAbsolute from "../Likes/ThreeDotsAbsolute";
import WindowSize from "../../../WindowSize";

export default function VideoMetaData() {
  const paragraph = ` 3 Musketjerët koncert live në Pallatin e Kongreseve, 15 Maj 2017, shoqëruar nga Orkestra Simfonike e RTSH.

  Follow 3 Musketjeret!
  Facebook: https://www.facebook.com/3musketjeret...
  
  Official music video by 3 Musketjerët performing "Ditë Dimri." (C) 2017, 3 Musketjeret - Connext - URA`;
  
  const [more, setMore] = useState(false)
  const {width } = WindowSize();
  const [fullLikes, setFullLikes] = useState(false)

  function showMore(){
    setMore(prev=>!prev)
  }
 
  window.addEventListener("resize", () => {
    console.log(width); //992
  })

  return (
    <div className="videoMetaData">
      <span className="title">
        Titles have either quotation marks for shorter works or italics for
        longer works, but never both. Examples of longer works are the titles of
        books or plays, while shorter works include the titles of poems or
        songs.
      </span>
      <Row>
        <Col lg={more ? 12 : 5} className='videoMetaData_details'>
          <span className="views_date">
            <span className="views">1,253 views</span>
            <span className="date">Jul 2, 2022</span>
          </span>
          <span className="videoDescription">
            {paragraph.length < 100 && !more ? paragraph : paragraph.substring(0, 100)}
          </span>
          <span className="videoDescription">
            {more && paragraph}
          </span>
          {paragraph.length >= 100 && <span className="videoMetaData_more" onClick={showMore}>{more ? 'Show less' : 'Show more'}</span>}
        </Col>
        {
          width > 992 &&
          <Col lg={more ? 12 : 7} className="video_likes">
          <Likes size={!more ? 20 : 25} />
          {more && <Download size={!more ? 20 : 25} />}
         {!more && < BsThreeDots size={!more ? 20 : 25} className='threeDotsRelative' />}
         <ThreeDotsAbsolute size={!more ? 20 : 25} className='ThreeDotsAbsolute' />
          {more && <BsThreeDots size={!more ? 20 : 25} />}
        </Col>}
        {
          width <=992 &&
          <Col lg={12} className="video_likes">
          <Likes size={25} />
          <Download size={25} />
          <BsThreeDots size={25} />
        </Col>
        }
      </Row>
    </div>
  );
}
