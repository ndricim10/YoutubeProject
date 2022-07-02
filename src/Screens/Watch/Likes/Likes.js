import React from "react";
import "./Likes.scss";
import { BiShare } from "react-icons/bi";
import millify from "millify";
import { useDispatch, useSelector } from "react-redux";
import { AiFillLike, AiFillDislike,AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { DisLike_False, DisLike_True, Like_False, Like_True } from "../../../Redux/Reducers/actionType";

export default function Likes({size}) {
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
        {!Like ? <AiOutlineLike size={size} /> : <AiFillLike size={size} />}
        <span>{millify(LikeCounter)}</span>
      </div>
      <div className="like_element" onClick={changeDisLike}>
        {!DisLike ? <AiOutlineDislike size={size} /> :<AiFillDislike size={size}/>} <span>{millify(DisLikeCounter)}</span>
      </div>
      <div className="like_element">
        <BiShare size={size} /> <span>Share</span>
      </div>
    </div>
  );
}
