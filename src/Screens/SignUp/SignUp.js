import React from "react";
import "./SignUp.scss";
import "../LoginEmail/LoginEmail.scss";
import { Link } from "react-router-dom";
import DarkMode from "../DarkModeMUI/DarkMode";
import { AiFillYoutube } from "react-icons/ai";

export default function SignUp() {
  return (
    <div className="signUp">
      <div className="yt-logo">
        <Link to="/">
          <AiFillYoutube color="red" size={50} />
        </Link>
      </div>
      <div className="switch">
        <DarkMode />
      </div>
      <span className="loginSpan">Sign Up</span>
      <div className="username">
        <span>Full Name</span>
        <div className="input">
          <input type="text" placeholder="Type your username" />
        </div>
      </div>
      <div className="username">
        <span>Username</span>
        <div className="input">
          <input type="text" placeholder="Type your username" />
        </div>
      </div>
      <div className="username">
        <span>Password</span>
        <div className="input">
          <input type="password" placeholder="Type your password" />
        </div>
      </div>
      <div className="username">
        <span>Confirm Password</span>
        <div className="input">
          <input type="password" placeholder="Type your password" />
        </div>
      </div>

      <button>Sign Up</button>

      <div className="have-account">
        <span>You already have an account?</span>
        <Link to="/login">
          <span>Sign in</span>
        </Link>
      </div>
    </div>
  );
}
