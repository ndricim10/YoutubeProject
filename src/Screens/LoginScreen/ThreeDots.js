import React from "react";
import SelectTheme from "./SelectTheme";
import './loginScreen.scss'
import {BiArrowBack} from 'react-icons/bi'
import {useSelector} from 'react-redux'

export default function ThreeDots({click}) {
    const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className={darkMode ? "threeDots light-mode" : "threeDots dark-mode"} onClick={click}>
      <div className="appearance" >
        <BiArrowBack size={30} />
        <span>Appearance</span>
      </div>
      <SelectTheme />
    </div>
  );
}
