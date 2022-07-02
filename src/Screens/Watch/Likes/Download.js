import React from "react";
import "./Likes.scss";
import { BsDownload } from "react-icons/bs";
import { BiCut } from "react-icons/bi";

export default function Download({size}) {
  return (
    <div className="likes">
      <div className="like_element">
        <BsDownload size={size} />
      </div>
      <div className="like_element">
        <BiCut size={size} />
      </div>
    </div>
  );
}
