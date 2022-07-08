import millify from "millify";
import React, { useEffect, useState } from "react";
import "../Comments/Comments.scss";
import "./subscribe.scss";
import "../../../index.scss";
import { useNavigate } from "react-router-dom";
import numeral from "numeral";

export default function Subscribe({video, subscribed}) {
  const navigate = useNavigate();
  
  function handleSubscribe() {
    if (!localStorage.getItem("yt-accessToken")) {
      navigate("../login", { replace: true });
    } 
  }

  return (
    <>
      <div className="subscribe">
        <div className="comments">
          <img src={video?.snippet?.thumbnails?.default?.url} />
          <div className="comments_profile">
            <span className="comments_profile_details_first">
              {video?.snippet?.title}
            </span>
            <span>{numeral(video?.statistics?.subscriberCount).format('0.a')} subscribers</span>
          </div>
        </div>
        <button
          onClick={handleSubscribe}
          className={subscribed ? "black-bg" : "red-bg"}
        >
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>
    </>
  );
}
