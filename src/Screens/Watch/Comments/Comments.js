import React, { useState } from "react";
import "./Comments.scss";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoMdRemoveCircleOutline,
} from "react-icons/io";
import WindowSize from "../../../WindowSize";

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
        <span className="span-comment" key={i}>
          {c.comment}
        </span>
      );
    }
  });

  const { width } = WindowSize();
  const [showComments, setShowComments] = useState(false);

  function trueComments() {
    setShowComments(true);
  }
  function falseComments() {
    setShowComments(false);
  }

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
      {width > 992 || showComments ? displayComments : null}
    </div>
  );
}
