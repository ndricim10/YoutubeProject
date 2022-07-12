import React from "react";
import "./sidebar.scss";
import { MdSubscriptions, MdThumbUp, MdHistory, MdHome } from "react-icons/md";
import { useSelector } from "react-redux";
import "../../index.scss";
import { Link } from "react-router-dom";

export default function Sidebar({ size }) {
  const darkMode = useSelector((state) => state.dar);
  return (
    <nav className="sidebar">
      <ul className="home-ul">
        <Link to="/" className="a">
          <li>
            <MdHome size={size} />
            <span>Home</span>
          </li>
        </Link>
        <Link to="/subscriptions" className="a">
          <li>
            <MdSubscriptions size={size} />
            <span>Subscriptions</span>
          </li>
        </Link>
        <Link to="/likedVideos" className="a">
          <li>
            <MdThumbUp size={size} />
            <span>Liked videos</span>
          </li>
        </Link>
        <Link to="/history" className="a">
          <li>
            <MdHistory size={size} />
            <span>History</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
