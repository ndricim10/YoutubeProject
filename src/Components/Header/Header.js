import "./header.scss";
import { FaBars } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import WindowSize from "../../WindowSize";

export default function Header() {
  const [search, setSearch] = useState(false)
  const { height, width } = WindowSize();

  
  function mainSearchBar(event) {
    event.preventDefault();
  }
  function searchBar(event) {
    event.preventDefault();
    setSearch(true);
  }
 
  function hideSearch(){
    setSearch(false)
  }

  window.addEventListener('resize', ()=>{
    if(width>576){
      setSearch(false)
    }
  })

  return (
    <div className="header" >
      <div className="header_left">
        <FaBars className="header_menu" size={24} />
        <div className="header_logo">
          <AiFillYoutube color="red" size={30} />
        </div>
      </div>
      <form>
        <input type="search" placeholder="Search" className="input" />
        {
          search &&
          <div className="small_search">
          <BiArrowBack className="arrow-back" size={25}  onClick={hideSearch} />
          <input type="search" placeholder="Search" className="small-input" />
          <button type="submit" onClick={searchBar} className="secondary-button">
          <FontAwesomeIcon icon={faSearch} fontSize={22} className="test" />
        </button>
        </div>
        }
        <button type="submit" className="main-button" onClick={mainSearchBar}>
          <FontAwesomeIcon icon={faSearch} fontSize={22} />
        </button>
        <button type="submit" onClick={searchBar} className="secondary-button">
          <FontAwesomeIcon icon={faSearch} fontSize={22} />
        </button>
      </form>

      <div className="header_icons">
        <MdApps size={25} />
        <MdNotifications size={25} />
        <img
          className="header_avatar"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
          alt=""
        />
      </div>
    </div>
  );
}
