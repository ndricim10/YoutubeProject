import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import "./LoginEmail.scss";
import LoginScreen from "../LoginScreen/LoginScreen";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../index.scss";
import DarkMode from "../DarkModeMUI/DarkMode";
import { AiFillYoutube } from "react-icons/ai";
import LoginFb from "../LoginScreen/LoginFb";
import { auth } from "../../firebase";
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  email_fail,
  email_request,
  email_success,
  load_email_profile,
  Login_request,
} from "../../Redux/Reducers/actionType";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function LoginEmail() {
  const { accessToken, loading } = useSelector((state) => state.loginEmail);
  const [error, setError] = useState(false);
  const darkMode = useSelector((state) => state.darkMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [visibility, setVisibility] = useState(false);
  const [toggleVisibility, setToggleVisibility] = useState(false);

  const login = async () => {
    try {
      dispatch({
        type: email_request,
      });

      const provider = new GoogleAuthProvider();
      const res = await signInWithEmailAndPassword(auth, email, password);

      const profile = {
        fullName: res.user.displayName,
        email: res.user.email,
        photoUrl: res.user.photoURL,
      };
      console.log(res.user);
      provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
      const accessToken = res.user.accessToken;

      localStorage.setItem("email-user", JSON.stringify(profile));
      localStorage.setItem("email-accessToken", accessToken);
      console.log(profile);

      dispatch({
        type: email_success,
        payload: accessToken,
      });
      dispatch({
        type: load_email_profile,
        payload: profile,
      });
      setError(false);
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };

  let navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("../", { replace: true });
    }
  }, [accessToken, navigate]);

  function handleVisible(event) {
    setPassword(event.target.value);
    
  }

  useEffect(()=>{
    if(password.length>0){
      setVisibility(true)
      setToggleVisibility(true)
      console.log(visibility, toggleVisibility);
    }
    else {
      setVisibility(false)
      console.log(visibility, toggleVisibility);
    }
  }, [password.length])

  function changeVisibility(){
    setToggleVisibility(prev=>!prev)
  }

  return (
    <>
      {loading ? (
        <div className="loader">
          <ReactLoading type="bars" height={200} width={175} />
        </div>
      ) : (
        <>
          <div className="big-login">
            <div className="yt-logo">
              <Link to="/">
                <AiFillYoutube color="red" size={50} />
              </Link>
            </div>
            <div className="switch">
              <DarkMode />
            </div>
            <div className="login-email">
              <span className="loginSpan">Login</span>
              <div>
                <div className="username">
                  <span>Email</span>
                  <div className={!darkMode ? "input light-mode" : "input"}>
                    <input
                      type="email"
                      placeholder="Type your email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="username">
                  <span>Password</span>
                  <div className={!darkMode ? "input light-mode" : "input"}>
                    <input
                      type={!toggleVisibility ? "text" : "password"}
                      placeholder="Type your password"
                      onChange={handleVisible}
                    />
                    <div className="eye">
                      {visibility && toggleVisibility ? (
                        <AiFillEye size={25} onClick={changeVisibility}  />
                      ) : null}
                      {visibility && !toggleVisibility ? (
                        <AiFillEyeInvisible
                          size={25} onClick={changeVisibility}
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
                <span className="forgot">Forgot password?</span>
              </div>

              {error && <span className="error">Error email or password</span>}
              <button onClick={() => dispatch(login())}>Login</button>

              <div className="other-logins">
                <span>Or Sign In using</span>
                <div className="login-icons">
                  <LoginFb />
                  <LoginScreen />
                </div>
              </div>
            </div>

            <div className="sign-up">
              Or Sign Up Using
              <Link to="/signup">
                <button className={darkMode ? "color-light" : "color-dark"}>
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
