import React from "react";
import "./header.scss";
import { FaBars } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import {GrSearch} from 'react-icons/gr'

export default function Header() {
  function searchBar(event) {
    event.preventDefault();
  }

  return (
    <div className="header">
      <div className="header_left">
        <FaBars className="header_menu" size={24} />
        <AiFillYoutube color="red" size={30} />
      </div>

      <form>
        <input type="search" placeholder="Search" />
        <button type="submit"  onClick={searchBar}>          
            <GrSearch size={22} className = "src" />
        </button>
      </form>

      <div className="header_icons">
        <MdApps size={25} />
        <MdNotifications size={25}  />
        <img
          className="header_avatar"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
          alt=""
        />
      </div>
    </div>
  );
}
