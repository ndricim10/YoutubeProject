import millify from "millify";
import React, { useState } from "react";
import "../Comments/Comments.scss";
import './subscribe.scss'
import '../../../index.scss'

export default function Subscribe() {
    const [subscribed, setSubscribed] = useState(false)
  
    function handleSubscribe(){
        setSubscribed(prev=>!prev)
    }
  
    return (
    <>
      <div className="subscribe">
        <div className="comments">
          <img src="https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png" />
          <div className="comments_profile">
            <span className="comments_profile_details_first">
              Europe official
            </span>
            <span>{millify(1837272)} subscribers</span>
          </div>
        </div>
        <button onClick={handleSubscribe} className={subscribed ? "black-bg" : "red-bg"}>{subscribed ? 'Subscribed' : 'Subscribe' }</button>
      </div>
    </>
  );
}
