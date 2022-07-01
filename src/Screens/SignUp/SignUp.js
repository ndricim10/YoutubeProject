import React, { useEffect, useState } from "react";
import "./SignUp.scss";
import "../LoginEmail/LoginEmail.scss";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "../DarkModeMUI/DarkMode";
import { AiFillYoutube } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  Login_request,
  Login_success,
  Login_fail,
  Login_out,
  load_profile,
  sign_request,
  sign_success,
  load_sign_profile,
  sign_fail,
} from "../../Redux/Reducers/actionType";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import ReactLoading from "react-loading";

export default function SignUp() {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.loginEmail);
  const darkMode = useSelector((state) => state.darkMode);
  const [error, setError] = useState(false);
  const { loading } = useSelector((state) => state._sign_up);
  let navigate = useNavigate();

  const signup = async () => {
    try {
      dispatch({
        type: sign_request,
      });
      const res = await createUserWithEmailAndPassword(
        auth,
        register.email,
        register.password
      );

      dispatch({
        type: sign_success,
        payload: accessToken,
      });
      dispatch({
        type: load_sign_profile,
        payload: res,
      });
      setError(false);
      navigate("../login", { replace: true });
    } catch (error) {
      dispatch({
        type: sign_fail,
        payload: error.message,
      });
      console.log(error.message);
      setError(true);
    }
  };

  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const [visibility, setVisibility] = useState(false);
  const [toggleVisibility, setToggleVisibility] = useState(false);
  const [visibilityConfirm, setVisibilityConfirm] = useState(false);
  const [toggleVisibilityConfirm, setToggleVisibilityConfirm] = useState(false);

  const [check, setCheck] = useState(false);
  const [eight, setEight] = useState(false);
  const [lower, setLower] = useState(false);
  const [upper, setUpper] = useState(false);
  const [special, setSpecial] = useState(false);
  const [number, setNumber] = useState(false);
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    // at least 8 characters
    if (register.password.length >= 0) {
      if (register.password.length >= 8) {
        setEight(true);
      } else {
        setEight(false);
      }
    }
    // a lower character
    if (register.password.length >= 0) {
      if (/[a-z]/.test(register.password)) {
        setLower(true);
      } else {
        setLower(false);
      }
    }
    // an upper character
    if (register.password.length >= 0) {
      if (/[A-Z]/.test(register.password)) {
        setUpper(true);
      } else {
        setUpper(false);
      }
    }
    // a special character
    if (register.password.length >= 0) {
      if (
        register.password.includes(".") ||
        register.password.includes("~") ||
        register.password.includes("`") ||
        register.password.includes("!") ||
        register.password.includes("@") ||
        register.password.includes("#") ||
        register.password.includes("$") ||
        register.password.includes("%") ||
        register.password.includes("^") ||
        register.password.includes("&") ||
        register.password.includes("*") ||
        register.password.includes("(") ||
        register.password.includes(")") ||
        register.password.includes("_") ||
        register.password.includes("-") ||
        register.password.includes("+") ||
        register.password.includes("=") ||
        register.password.includes("|") ||
        register.password.includes(";") ||
        register.password.includes("<") ||
        register.password.includes(">") ||
        register.password.includes(",") ||
        register.password.includes("?")
      ) {
        setSpecial(true);
      } else {
        setSpecial(false);
      }
    }
    // a number
    if (register.password.length >= 0) {
      if (/\d/.test(register.password)) {
        setNumber(true);
      } else {
        setNumber(false);
      }
    }
  }, [register.password.length]);

  function handleChange(event) {
    setRegister((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const Checked = () => {
    return (
      <>
        <div className="checking">
          <ul>
            <li className={lower ? "halfOpacity" : ""}>
              One lowercase character
            </li>
            <li className={upper ? "halfOpacity" : ""}>
              One uppercase character
            </li>
            <li className={number ? "halfOpacity" : ""}>One number</li>
          </ul>
          <ul>
            <li className={special ? "halfOpacity" : ""}>
              One special character
            </li>
            <li className={eight ? "halfOpacity" : ""}>8 characters minimum</li>
          </ul>
        </div>
      </>
    );
  };

  useEffect(() => {
    if (register.password.length > 0) {
      setVisibility(true);
      setToggleVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [register.password.length]);

  useEffect(() => {
    if (register.confirmPass.length > 0) {
      setVisibilityConfirm(true);
      setToggleVisibilityConfirm(true);
    } else {
      setVisibilityConfirm(false);
    }
  }, [register.confirmPass.length]);

  useEffect(() => {
    if (
      lower &&
      upper &&
      number &&
      special &&
      eight &&
      register.email.length > 5 &&
      register.email.includes("@") &&
      register.confirmPass === register.password
    ) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  });
  function changeVisibility() {
    setToggleVisibility((prev) => !prev);
  }

  function changeVisibilityConfirm() {
    setToggleVisibilityConfirm((prev) => !prev);
  }

  function checkTrue() {
    setCheck(true);
  }
  function checkFalse() {
    setCheck(false);
  }

  return (
    <>
      {loading ? (
        <div className="loader">
          <ReactLoading type="bars" height={200} width={175} />
        </div>
      ) : (
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
            <span>Email</span>
            <div className={!darkMode ? "input light-mode" : "input"}>
              <input
                type="email"
                placeholder="Type your email"
                onChange={handleChange}
                name="email"
              />
            </div>
          </div>
          <div className="username" onFocus={checkTrue} onBlur={checkFalse}>
            <span>Password</span>
            <div className={!darkMode ? "input light-mode" : "input"}>
              <input
                type={!toggleVisibility ? "text" : "password"}
                placeholder="Type your password"
                onChange={handleChange}
                name="password"
              />
              <div className="eye">
                {visibility && toggleVisibility ? (
                  <AiFillEye size={25} onClick={changeVisibility} />
                ) : null}
                {visibility && !toggleVisibility ? (
                  <AiFillEyeInvisible size={25} onClick={changeVisibility} />
                ) : null}
              </div>
            </div>
          </div>
          {check && <Checked />}
          <div className="username">
            <span>Confirm Password</span>
            <div className={!darkMode ? "input light-mode" : "input"}>
              <input
                type={!toggleVisibilityConfirm ? "text" : "password"}
                placeholder="Confirm your password"
                onChange={handleChange}
                name="confirmPass"
              />
              <div className="eye">
                {visibilityConfirm && toggleVisibilityConfirm ? (
                  <AiFillEye size={25} onClick={changeVisibilityConfirm} />
                ) : null}
                {visibilityConfirm && !toggleVisibilityConfirm ? (
                  <AiFillEyeInvisible
                    size={25}
                    onClick={changeVisibilityConfirm}
                  />
                ) : null}
              </div>
            </div>
          </div>
          {error && <span className="error">This account already exists</span>}
          <div className="btn">
            <button disabled={!btn} onClick={signup}>
              Sign Up
            </button>
          </div>

          <div className="have-account">
            <span>You already have an account?</span>
            <Link to="/login">
              <span>Sign in</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
