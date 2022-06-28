import React from "react";
import "./SignUp.scss";
import "../LoginEmail/LoginEmail.scss";
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="signUp">
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
        <Link to='/login' ><span>Sign in</span></Link>
      </div>
    </div>
  );
}
