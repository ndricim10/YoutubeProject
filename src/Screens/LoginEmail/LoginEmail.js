import React from "react";
import "./LoginEmail.scss";
import LoginScreen from "../LoginScreen/LoginScreen";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import '../../index.scss'

export default function LoginEmail() {
  
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <>
      <div className="big-login">
        <div className="login-email">
          <span className="loginSpan">Login</span>
          <div>
            <div className="username">
              <span>Username</span>
              <div className="input">
                <input type="text" placeholder="Type your username" />
              </div>
            </div>
          </div>
          <div>
            <div className="username">
              <span>Password</span>
              <div className="input">
                <input type="password" placeholder="Type your password" />
              </div>
            </div>
            <span className="forgot">Forgot password?</span>
          </div>

          <button>Login</button>

          <div className="other-logins">
            <span>Or Sign In using</span>
            <div className="login-icons">
              <LoginScreen />
            </div>
          </div>
        </div>

        <div className="sign-up">
          Or Sign Up Using
          <Link to="/signup">
            <button className={darkMode? "color-light" : "color-dark"}>Sign Up</button>
          </Link>
        </div>
      </div>
    </>
  );
}
