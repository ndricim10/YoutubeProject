import React, { useEffect } from "react";
import { AiFillYoutube } from "react-icons/ai";
import '../../Components/Header/header.scss'
import { login } from "../../Redux/Actions/authAction";
import './loginScreen.scss'
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

export default function LoginScreen() {
  
  const dispatch = useDispatch()
const accessToken = useSelector(state=>state.auth.accessToken)

  const handleLogin=()=>{
    dispatch(login())
  }

  let navigate = useNavigate()

  useEffect(()=>{
    if(accessToken){
      navigate("../", { replace: true });
    }
  }, [accessToken, navigate])
  return (
    <div className="login" onClick={handleLogin}>
      <FiLogIn size={25}/>
      <button>Login</button>
    </div>
  );
}
