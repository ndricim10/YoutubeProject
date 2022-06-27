import React from "react";
import "./loginScreen.scss";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { dark_false, dark_true, profile_true, theme_false } from "../../Redux/Reducers/actionType";
import { useSelector, useDispatch } from "react-redux";

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
      <div className="select-theme">
        <span className="desc">Setting applies to this browser only</span>
        <div className="light-dark">
          <div className="ld" onClick={() => dispatch(dark_true())}>
            <div>{!dark_mode && <AiOutlineCheck size={22} />}</div>
            <span>Dark theme</span>
          </div>
          <div className="ld" onClick={() => dispatch(dark_false())}>
          <div>{dark_mode && <AiOutlineCheck size={22} />}</div>
            <span>Light theme</span>
          </div>
        </div>
      </div>
    </div>
  );
}
