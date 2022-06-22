import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./toggleScreen.scss";

export default function ToggleScreen({click}) {
  return (
    <>
      <div className="toggleScreen">
        <div className="leftToggle">
          <Sidebar size={23} />
        </div>
        <div className="rightToggle" onClick={click} ></div>
      </div>
      
    </>
  );
}
