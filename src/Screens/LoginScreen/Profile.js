import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import "./loginScreen.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  profile_false,
  Login_out,
  email_out,
  theme_true,
} from "../../Redux/Reducers/actionType";
import ChangeLightMode from "../lightMode/lightMode";
import { Link, useNavigate } from "react-router-dom";
import { email, fullName, photoURL } from "../../profileDetails";

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

  const myUser = JSON.parse(localStorage.getItem("yt-user"));

  console.log(myUser);


  function Theme() {
    dispatch(profile_false());
    dispatch(theme_true());
  }

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
          <Link className="a" to="/profile">
            <div onClick={() => dispatch(profile_false())}>My profile</div>
          </Link>
          <div onClick={logOut}>
            <FontAwesomeIcon icon={faSignOut} />
            <span>Sign out</span>
          </div>
          <ChangeLightMode Theme={Theme} darkMode={darkMode} />
        </div>
      </div>
    )
  );
}
