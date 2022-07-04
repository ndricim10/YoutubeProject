import React, { useEffect, useState } from "react";
import "./Comments.scss";
import '../../../index.scss'
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoMdRemoveCircleOutline,
} from "react-icons/io";
import WindowSize from "../../../WindowSize";
import {useSelector} from 'react-redux'

export default function Comments() {
  const allComments = [
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment:
        "second comment second comment second comment second comment second comment second comment second comment second comment second comment second comment second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment:
        "second comment second comment second comment second comment second comment second comment second comment second comment second comment second comment second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
    {
      profile: "Ndricim Jahaj",
      time: "a year ago",
      comment: "second comment",
      photoUrl:
        "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png",
    },
  ];

  const darkMode = useSelector(state=>state.darkMode)

  const displayComments = allComments.map((c, i) => {
    return (
      <div className="comments" key={i}>
        <img src={c.photoUrl} />
        <div className="comments_profile">
          <div className="comments_profile_details">
            <span className="comments_profile_details_first">{c.profile}</span>
            <span comments_profile_details_second>{c.time}</span>
          </div>
          <span>{c.comment}</span>
        </div>
      </div>
    );
  });

  const firstComment = allComments.map((c, i) => {
    if (i == 0) {
      return (
        <div key={i} className="comments">
          <img src={c.photoUrl} />
          <span className="span-comment">{c.comment}</span>
        </div>
      );
    }
  });

  const { width } = WindowSize();
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState(false);
  const [buttons, setButtons] = useState(false);
  const [text, setText] = useState(false);

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
    setButtons(true);
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
            <span className="firstChild">Comments {allComments.length}</span>{" "}
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
          <span className="number-comments">{allComments.length} Comments</span>
          <IoMdRemoveCircleOutline size={30} />
        </div>
      ) : null}
      {width > 992 && (
        <span className="number-comments">{allComments.length} Comments</span>
      )}

      {width > 992 || showComments ? (
        <>
          <div className="create-comment">
            <div className="comments">
              <img src="https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png" />
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
                <button onClick={falseButtons} className={darkMode ? "light-mode" : "dark-mode"}>Cancel</button>
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
    </div>
  );
}
