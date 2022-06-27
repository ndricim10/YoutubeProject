import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSignOut } from "@fortawesome/free-solid-svg-icons";
import "./loginScreen.scss";
import { useSelector, useDispatch } from "react-redux";
import { profile_false, Login_out } from "../../Redux/Reducers/actionType";
import ChangeLightMode from "../lightMode/lightMode";


export default function Profile() {
  const { user } = useSelector((state) => state.auth)
  const darkMode = useSelector(state=>state.darkMode)
  const dispatch = useDispatch();

  

  function logOut() {
    dispatch({ type: Login_out });
    window.localStorage.clear();
    dispatch(profile_false())
  }

  return localStorage.getItem("yt-accessToken") ? (
    <div className={darkMode ? "profile light-mode" : "profile dark-mode"}>
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
        <ChangeLightMode />
      </div>
    </div>
  ) : null;
}
