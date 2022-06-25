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
import ToggleScreen from "../../Screens/ToggleScreen/ToggleScreen";
import {Link} from 'react-router-dom'
import { login } from "../../Redux/Actions/authAction";

export default function Header() {
  const [search, setSearch] = useState(false)
  const { height, width } = WindowSize();
  const [sideBar, setSideBar] = useState(false)
  
  function mainSearchBar(event) {
    event.preventDefault();
  }
  function searchBar(event) {
    event.preventDefault();
    setSearch(true);
  }
 
  function ToggleSideBar(){
    setSideBar(prev =>!prev)
    document.body.classList.toggle("no-scroll")
  }
  function hideSideBar(){
    setSideBar(false)
    document.body.classList.remove("no-scroll")
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
      {sideBar && <ToggleScreen click={hideSideBar} />}
      <div className="header_left">
        <div className="menuBar" onClick={ToggleSideBar}>
        <FaBars className="header_menu" size={24} />
        </div>
        <div className="header_logo">
          <Link to='/' >
          <AiFillYoutube color="red" size={30} />
          </Link>
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
          src=""
          alt=""
        />
      </div>
    </div>
  );
}
