import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSignOut } from "@fortawesome/free-solid-svg-icons";
import "./loginScreen.scss";
import { useSelector, useDispatch } from "react-redux";
import { profile_false, Login_out } from "../../Redux/Reducers/actionType";
import ChangeLightMode from "../lightMode/lightMode";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const userEmail = useSelector((state)=>state.loginEmail.user)
  const mail = useSelector(state=>state.loginEmail)
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  console.log(userEmail);

  function logOut() {
    dispatch({ type: Login_out });
    // window.localStorage.clear();
    localStorage.removeItem("yt-accessToken")
    localStorage.removeItem("yt-user")
    localStorage.removeItem("email-accessToken")
    localStorage.removeItem("email-user")
    dispatch(profile_false());
  }

  const photoURL = ()=>{
    if(user){
     if(isNaN(user.photoURL)){
      return "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png"
     }
     else{
      return user.photoURL
     }
    }
    else if(userEmail){
      if(isNaN(userEmail.photoURL)){
        return "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png"
       }
       else{
        return userEmail.photoURL
       }
    }
    else{
      return "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png"
    }
  }


  const fullName = ()=>{
    if(user){
      return user.fullName
    }
    else if(userEmail){
      return userEmail.fullName
    }
    else{
      return "Default Name"
    }
  }

  const email = ()=>{
    if(user){
      return user.email
    }
    else if(userEmail){
      return userEmail.email
    }
    else{
      return "default email"
    }
  }

  console.log(userEmail);

  return (localStorage.getItem("yt-accessToken") || localStorage.getItem('email-user')) && (
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
}
