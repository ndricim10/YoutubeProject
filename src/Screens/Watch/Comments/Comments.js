import React, { useEffect, useState } from "react";
import "./Comments.scss";
import "../../../index.scss";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoMdRemoveCircleOutline,
} from "react-icons/io";
import WindowSize from "../../../WindowSize";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";


export default function Comments() {
  const { comments } = useSelector((state) => state.commentsById);
  const { video } = useSelector((state) => state.videoById);

  const { user } = useSelector((state) => state.auth);
  const userEmail = useSelector((state) => state.loginEmail.user);

  const photoURL = () => {
    if (user) {
      if (user.photoURL) {
        return user.photoURL;
      }
      else if(userEmail){
        if(user.photoUrl){
          return user.photoUrl;
        }
      }
       else {
        return "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png";
      }
    }
  };

  const darkMode = useSelector((state) => state.darkMode);
  const navigate = useNavigate();
  const displayComments = comments.map((c, i) => {
    return (
      <div className="comments" key={i}>
        <img src={c.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} />
        <div className="comments_profile">
          <div className="comments_profile_details">
            <span className="comments_profile_details_first">
              {c.snippet?.topLevelComment?.snippet?.authorDisplayName}
            </span>
            <span comments_profile_details_second>
              {moment(c.snippet?.topLevelComment?.snippet?.publishedAt)
                .startOf("day")
                .fromNow()}
            </span>
          </div>
          <span>{c.snippet?.topLevelComment?.snippet?.textOriginal}</span>
        </div>
      </div>
    );
  });

  const firstComment = comments.map((c, i) => {
    if (i == 0) {
      return (
        <div key={i} className="comments">
          <img
            src={c.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
          />
          <span>{c.snippet?.topLevelComment?.snippet?.textOriginal}</span>
        </div>
      );
    }
  });

  const { width } = WindowSize();
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState(false);
  const [buttons, setButtons] = useState(false);
  const [text, setText] = useState("");

  function trueComments() {
    setShowComments(true);
  }
  function falseComments() {
    setShowComments(false);
  }

  function handleText(event) {
    setText(event.target.value);
  }

  function trueButtons() {
    if (!localStorage.getItem("yt-accessToken")) {
      navigate("../login", { replace: true });
    } else {
      setButtons(true);
    }
  }
  function falseButtons() {
    setButtons(false);
  }

  useEffect(() => {
    if (text.length > 0) {
      setComment(true);
    } else {
      setComment(false);
    }
  }, [text]);

  return (
    <div className="all-comments">
      {width <= 992 && !showComments ? (
        <div className="firstComment" onClick={trueComments}>
          {/* <div className="border-comments">Comments</div> */}
          <div className="border-comments">
            <span className="firstChild">
              Comments {video?.statistics?.commentCount}
            </span>{" "}
            {firstComment}
            <div className="arrows">
              <IoIosArrowUp />
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      ) : null}

      {width <= 992 && showComments ? (
        <div className="comment_section" onClick={falseComments}>
          <span className="number-comments">
            {video?.statistics?.commentCount} Comments
          </span>
          <IoMdRemoveCircleOutline size={30} />
        </div>
      ) : null}
      {width > 992 && (
        <span className="number-comments">
          {video?.statistics?.commentCount} Comments
        </span>
      )}

      {width > 992 || showComments ? (
        <>
          <div className="create-comment">
            <div className="comments">
              <img src={photoURL()} />
              <input
                type="text"
                className={darkMode ? "light-mode" : "dark-mode"}
                onChange={handleText}
                onFocus={trueButtons}
                placeholder="Add a comment..."
              />
            </div>
            {buttons && (
              <div className="add-buttons">
                <button
                  onClick={falseButtons}
                  className={darkMode ? "light-mode" : "dark-mode"}
                >
                  Cancel
                </button>
                <button
                  className={
                    comment
                      ? "add-comment-btn blue-bg"
                      : "add-comment-btn black-bg"
                  }
                >
                  Comment
                </button>
              </div>
            )}
          </div>

          {displayComments}
        </>
      ) : null}

      {width <= 992 && showComments ? (
        <div className="comment_section" onClick={falseComments}>
          <span className="number-comments">
            {video?.statistics?.commentCount} Comments
          </span>
          <IoMdRemoveCircleOutline size={30} />
        </div>
      ) : null}
    </div>
  );
}
