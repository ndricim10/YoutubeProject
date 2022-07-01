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
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

export default function SignUp() {
  const dispatch = useDispatch();
  const {accessToken} = useSelector(state=>state.loginEmail)
  const darkMode = useSelector((state) => state.darkMode);

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
  
  const [visibility, setVisibility] = useState(false);
  const [toggleVisibility, setToggleVisibility] = useState(false);
  const [visibilityConfirm, setVisibilityConfirm] = useState(false);
  const [toggleVisibilityConfirm, setToggleVisibilityConfirm] = useState(false);

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

  useEffect(()=>{
    if(register.password.length>0){
      setVisibility(true)
      setToggleVisibility(true)
    }
    else {
      setVisibility(false)
    }
  }, [register.password.length])

  useEffect(()=>{
    if(register.confirmPass.length>0){
      setVisibilityConfirm(true)
      setToggleVisibilityConfirm(true)
    }
    else {
      setVisibilityConfirm(false)
    }
  }, [register.confirmPass.length])

  function changeVisibility(){
    setToggleVisibility(prev=>!prev)
  }

  function changeVisibilityConfirm(){
    setToggleVisibilityConfirm(prev=>!prev)
    console.log(toggleVisibilityConfirm);
  }

  useEffect(()=>{
    if(register.password === register.confirmPass){
      console.log('true');
    }
    else{
      console.log('false');
    }
  },[register.password.length, register.confirmPass.length])

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
      <div className="username">
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
                        <AiFillEye size={25} onClick={changeVisibilityConfirm}  />
                      ) : null}
                      {visibilityConfirm && !toggleVisibilityConfirm ? (
                        <AiFillEyeInvisible
                          size={25} onClick={changeVisibilityConfirm}
                        />
                      ) : null}
                    </div>
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
