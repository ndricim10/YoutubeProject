import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import '../../Components/Header/header.scss'
import { login } from "../../Redux/Actions/authAction";
import './loginScreen.scss'
import { useDispatch } from "react-redux/es/exports";

export default function LoginScreen() {
  
  const dispatch = useDispatch()
  const handleLogin=()=>{
    dispatch(login())
    console.log('clicked');
  }

  return (
    <div className="login">
      <div className="login_container">
        <div className="header_logo">
          <AiFillYoutube color="red" size={50} />
        </div>
        <button onClick={handleLogin}>Login with Google</button>
      </div>
    </div>
  );
}
