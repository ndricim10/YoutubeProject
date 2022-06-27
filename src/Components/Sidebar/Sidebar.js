import React from "react";
import "./sidebar.scss";
import {
  MdSubscriptions,
  MdThumbUp,
  MdHistory,
  MdHome,
} from "react-icons/md";
import {useSelector} from 'react-redux'
import '../../index.scss'

export default function Sidebar({size}) {
  const darkMode = useSelector(state=>state.dar)
  return (
    <nav className="sidebar"  >
      <ul className="home-ul">
        <li>
          <MdHome size={size} />
          <span>Home</span>
        </li>
        <li>
          <MdSubscriptions size={size} />
          <span>Subscriptions</span>
        </li>
        <li>
          <MdThumbUp size={size} />
          <span>Liked videos</span>
        </li>
        <li>
          <MdHistory size={size} />
          <span>History</span>
        </li>
      </ul>
    </nav>
  );
}
