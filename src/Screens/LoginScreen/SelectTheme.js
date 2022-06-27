import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { dark_false, dark_true } from "../../Redux/Reducers/actionType";

export default function SelectTheme() {
    const dark_mode = useSelector((state) => state.darkMode);
    const dispatch = useDispatch();
  return (
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
  )
}
