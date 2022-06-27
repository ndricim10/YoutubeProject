import React, { useEffect } from "react";
import "../../Components/Header/header.scss";
import { login } from "../../Redux/Actions/authAction";
import "./loginScreen.scss";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import '../../index.scss'

export default function LoginScreen() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const darkMode = useSelector((state) => state.darkMode);

  const handleLogin = () => {
    dispatch(login());
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("../", { replace: true });
    }
  }, [accessToken, navigate]);
  return (
    <div className={darkMode ? "login light-mode" : "login dark-mode"} onClick={handleLogin}>
      <FiLogIn size={25} />
      <button className={darkMode ? "light-mode" : "dark-mode"}>Login</button>
    </div>
  );
}
