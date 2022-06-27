import React from "react";
import "./loginScreen.scss";
import { BiArrowBack } from "react-icons/bi";
import { dark_false, dark_true, profile_true, theme_false } from "../../Redux/Reducers/actionType";
import { useSelector, useDispatch } from "react-redux";
import SelectTheme from "./SelectTheme";

export default function Theme() {
  const dark_mode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  function arrowBack(){
    dispatch(profile_true())
    dispatch(theme_false())
  }


  return (
    <div className={dark_mode ? "profile light-mode" : "profile dark-mode"} onClick={()=>dispatch(theme_false())}>
      <div className="appearance">
        <BiArrowBack onClick={arrowBack} size={30} />
        <span>Appearance</span>
      </div>
      <SelectTheme />
    </div>
  );
}
