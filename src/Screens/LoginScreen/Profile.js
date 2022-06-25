import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSignOut } from "@fortawesome/free-solid-svg-icons";
import "./loginScreen.scss";
import { AiOutlineRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { profile_false, Login_out } from "../../Redux/Reducers/actionType";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function Theme() {
    dispatch(profile_false());
  }

  function logOut() {
    dispatch({ type: Login_out });
    window.localStorage.clear();
    dispatch(profile_false())
  }

  return localStorage.getItem("yt-accessToken") ? (
    <div className="profile">
      <div className="profile_main">
        <img src={user.photoUrl} className="header_avatar" />
        <div>
        <span>{user.name}</span>
        <span className="email">{user.email}</span>
        </div>
      </div>
      <div className="profile_settings">
        <div onClick={logOut}>
          <FontAwesomeIcon icon={faSignOut} />
          <span>Sign out</span>
        </div>
        <div onClick={Theme}>
          <FontAwesomeIcon icon={faMoon} /> <span>Appearance: Light</span>
          <AiOutlineRight size={25} />
        </div>
      </div>
    </div>
  ) : null;
}
