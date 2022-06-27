import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./toggleScreen.scss";
import {useSelector} from 'react-redux'
import '../../index.scss'

export default function ToggleScreen({click}) {
  
  const darkMode = useSelector(state=>state.darkMode)
  return (
    <>
    
      <div className="toggleScreen">
        <div className={darkMode ? "leftToggle light-mode" : "leftToggle dark-mode"}>
          <Sidebar size={23} />
        </div>
        <div className="rightToggle" onClick={click} ></div>
      </div>
      
    </>
  );
}
