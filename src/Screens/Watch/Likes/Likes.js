import React from "react";
import "./Likes.scss";
import { BiLike, BiDislike, BiShare } from "react-icons/bi";
import millify from "millify";
import { useDispatch, useSelector } from "react-redux";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { DisLike_False, DisLike_True, Like_False, Like_True } from "../../../Redux/Reducers/actionType";

export default function Likes() {
  const dispatch = useDispatch();
  const { Like, LikeCounter } = useSelector((state) => state.Like);
  const { DisLike, DisLikeCounter } = useSelector((state) => state.DisLike);

  function changeLike() {
    dispatch(Like_True());
    dispatch(DisLike_False())
  }

  function changeDisLike() {
    dispatch(DisLike_True());
    dispatch(Like_False())
  }


  return (
    <div className="likes">
      <div className="like_element" onClick={changeLike}>
        {!Like ? <BiLike size={25} /> : <AiFillLike size={25} />}
        <span>{LikeCounter}</span>
      </div>
      <div className="like_element" onClick={changeDisLike}>
        {!DisLike ? <BiDislike size={25} /> :<AiFillDislike size={25}/>} <span>Dislike {DisLikeCounter}</span>
      </div>
      <div className="like_element">
        <BiShare size={25} /> <span>Share</span>
      </div>
    </div>
  );
}
