import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {MdOutlineLightMode} from 'react-icons/md'
import { AiOutlineRight } from "react-icons/ai";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import '../LoginScreen/loginScreen.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChangeLightMode({Theme, darkMode}) {
  return (
    <div onClick={Theme}>
      {darkMode ? <MdOutlineLightMode /> : <FontAwesomeIcon icon={faMoon} />}{" "}
      <span>Appearance: {darkMode ? "Light" : "Dark"}</span>
      <AiOutlineRight size={25} />
    </div>
  );
}
