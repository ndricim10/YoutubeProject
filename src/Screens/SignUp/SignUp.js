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
} from "../../Redux/Reducers/actionType";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const dispatch = useDispatch();
  const {accessToken} = useSelector(state=>state.loginEmail)

  const signup = async () => {
    console.log(register);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        register.fullName,
        register.email,
        register.password
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  function handleChange(event) {
    setRegister((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  let navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("../", { replace: true });
    }
  }, [accessToken, navigate]);

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
          <input
            type="text"
            placeholder="Type your username"
            onChange={handleChange}
            name="fullName"
          />
        </div>
      </div>
      <div className="username">
        <span>Email</span>
        <div className="input">
          <input
            type="email"
            placeholder="Type your email"
            onChange={handleChange}
            name="email"
          />
        </div>
      </div>
      <div className="username">
        <span>Password</span>
        <div className="input">
          <input
            type="password"
            placeholder="Type your password"
            onChange={handleChange}
            name="password"
          />
        </div>
      </div>
      <div className="username">
        <span>Confirm Password</span>
        <div className="input">
          <input
            type="password"
            placeholder="Type your password"
            onChange={handleChange}
            name="confirmPass"
          />
        </div>
      </div>

      <button onClick={signup}>Sign Up</button>

      <div className="have-account">
        <span>You already have an account?</span>
        <Link to="/login">
          <span>Sign in</span>
        </Link>
      </div>
    </div>
  );
}
