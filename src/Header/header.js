import React from "react";
import "./header.css";
import {} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

export default function Header() {
  return (
    <>
      <header>
        <div className="menu-header">
          <div className="menu-bar">
          <MenuIcon />
          <div className="menu-absolute">
            absolute
        </div>
          </div>
          <img
            className="yt-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/9/90/Logo_of_YouTube_%282013-2015%29.svg"
            alt=""
          />



        </div>
        
        <div className="search">
          <input type="search" placeholder="Search" />
          <SearchIcon />
        </div>
        <div className="right-header">
          <VideoCallIcon />
          <AppsIcon />
          <NotificationsIcon />
          <Avatar />
        </div>
      </header>
    </>
  );
}
