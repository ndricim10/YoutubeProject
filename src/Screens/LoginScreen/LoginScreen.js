import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import '../../Components/Header/header.scss'
import './loginScreen.scss'

export default function LoginScreen() {
  return (
    <div className="login">
      <div className="login_container">
        <div className="header_logo">
          <AiFillYoutube color="red" size={50} />
        </div>
        <button>Login with Google</button>
      </div>
    </div>
  );
}
