import React from "react";
import "./Likes.scss";
import { BiShare } from "react-icons/bi";
import millify from "millify";
import { useDispatch, useSelector } from "react-redux";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import {
  DisLike_False,
  DisLike_True,
  Like_False,
  Like_True,
} from "../../../Redux/Reducers/actionType";
import { useNavigate } from "react-router-dom";
import numeral from "numeral";

export default function Likes({ size, video, videoId }) {
  const dispatch = useDispatch();
  const { Like, LikeCounter } = useSelector((state) => state.Like);
  const { DisLike, DisLikeCounter } = useSelector((state) => state.DisLike);
  const navigate = useNavigate();

  function changeLike() {
    if (!localStorage.getItem("yt-accessToken")) {
      navigate("../login", { replace: true });
    } else {
      dispatch(Like_True());
      dispatch(DisLike_False());
    }
  }
  function changeDisLike() {
    if (!localStorage.getItem("yt-accessToken")) {
      navigate("../login", { replace: true });
    } else {
      dispatch(DisLike_True());
      dispatch(Like_False());
    }
  }

  return (
    <div className="likes">
      <div className="like_element" onClick={changeLike}>
        {!Like ? <AiOutlineLike size={size} /> : <AiFillLike size={size} />}
        <span>{numeral(video?.statistics?.likeCount).format('0.a')}</span>
      </div>
      <div className="like_element" onClick={changeDisLike}>
        {!DisLike ? (
          <AiOutlineDislike size={size} />
        ) : (
          <AiFillDislike size={size} />
        )}{" "}
        <span>{numeral(DisLikeCounter).format('0.a')}</span>
      </div>
      <div className="like_element">
        <BiShare size={size} /> <span>Share</span>
      </div>
    </div>
  );
}
