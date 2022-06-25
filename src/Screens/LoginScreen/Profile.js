import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoon, faSignOut} from '@fortawesome/free-solid-svg-icons'
import './loginScreen.scss'
import {AiOutlineRight} from 'react-icons/ai'
import {useSelector, useDispatch} from 'react-redux'
import { profile_true, profile_false } from "../../Redux/Reducers/actionType"; 
import { log_out } from "../../Redux/Reducers/actionType";

export default function Profile() {
  
  const {user}  = useSelector((state) => state.auth);
  console.log(user);
  const profile_toggle1 = useSelector(state=>state.profile_toggle)
  const dispatch = useDispatch()

  return (
    <div className="profile">
      <div className="profile_main">
        <img src={user.photoUrl} className="header_avatar"/>
        <span>{user.name}</span>
      </div>
      <div className="profile_settings">
        <div onClick={()=>dispatch(log_out())}>
          <FontAwesomeIcon icon={faSignOut} />
          <span>Sign out</span>
        </div>
        <div>
        <FontAwesomeIcon icon={faMoon} /> <span>Appearance: Light</span>
        <AiOutlineRight size={25} />
        </div>
      </div>
    </div>
  );
}
