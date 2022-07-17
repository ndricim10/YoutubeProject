import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignOut } from "@fortawesome/free-solid-svg-icons";
import "./loginScreen.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  profile_false,
  Login_out,
  email_out,
} from "../../Redux/Reducers/actionType";
import ChangeLightMode from "../lightMode/lightMode";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const userEmail = useSelector((state) => state.loginEmail.user);
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function logOut() {
    dispatch({ type: Login_out });
    dispatch({ type: email_out });
    localStorage.removeItem("yt-accessToken");
    localStorage.removeItem("yt-user");
    localStorage.removeItem("email-accessToken");
    localStorage.removeItem("email-user");
    dispatch(profile_false());
    navigate("../login", { replace: true });
  }

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

  const fullName = () => {
    if (user) {
      if (user.fullName) {
        return user.fullName;
      } else {
        return "Default Name";
      }
    }
  };

  const email = () => {
    if (user) {
      if (user.email) {
        return user.email;
      } else {
        return "default email";
      }
    }
  };

  return (
    localStorage.getItem("yt-accessToken") && (
      <div className={darkMode ? "profile light-mode" : "profile dark-mode"}>
        <div className="profile_main">
          <img src={photoURL()} className="header_avatar" />
          <div>
            <span>{fullName()}</span>
            <span className="email">{email()}</span>
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
    )
  );
}
