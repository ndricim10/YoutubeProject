import React from "react";
import "./sidebar.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";

export default function Sidebar({size}) {
  return (
    <nav className="sidebar">
      <ul>
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
