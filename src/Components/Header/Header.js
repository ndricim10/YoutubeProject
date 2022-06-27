import "./header.scss";
import { FaBars } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import WindowSize from "../../WindowSize";
import ToggleScreen from "../../Screens/ToggleScreen/ToggleScreen";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Profile from "../../Screens/LoginScreen/Profile";
import { profile_toggle } from "../../Redux/Reducers/actionType";
import LoginScreen from "../../Screens/LoginScreen/LoginScreen";
import {BsThreeDotsVertical} from 'react-icons/bs'
import {RiVideoAddFill} from 'react-icons/ri'
import Theme from "../../Screens/LoginScreen/Theme";

export default function Header() {
  const [search, setSearch] = useState(false);
  const { height, width } = WindowSize();
  const [sideBar, setSideBar] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const profile_toggle1 = useSelector((state) => state.profile_toggle);
  const showTheme = useSelector(state=>state.Theme)
  const darkMode = useSelector(state=>state.darkMode)
  const dispatch = useDispatch();


  function mainSearchBar(event) {
    event.preventDefault();
  }
  function searchBar(event) {
    event.preventDefault();
    setSearch(true);
  }

  function ToggleSideBar() {
    setSideBar((prev) => !prev);
    document.body.classList.toggle("no-scroll");
  }
  function hideSideBar() {
    setSideBar(false);
    document.body.classList.remove("no-scroll");
  }

  function hideSearch() {
    setSearch(false);
  }

  window.addEventListener("resize", () => {
    if (width > 576) {
      setSearch(false);
    }
  });

  return (
    <div className={darkMode ? "header light-mode" : "header dark-mode"}>
      {sideBar && <ToggleScreen click={hideSideBar} />}
      <div className="header_left">
        <div className="menuBar" onClick={ToggleSideBar}>
          <FaBars className="header_menu" size={30} />
        </div>
        <div className="header_logo">
          <Link to="/">
            <AiFillYoutube color="red" size={30} />
          </Link>
        </div>
      </div>
      <form>
        <input type="search" placeholder="Search" className={darkMode ? "input color-light" : "input color-dark"} />
        {search && (
          <div className={darkMode ? "small_search light-mode" : "small_search dark-mode"}>
            <BiArrowBack
              className="arrow-back"
              size={25}
              onClick={hideSearch}
            />
            <input type="search" placeholder="Search" className="small-input" />
            <button
              type="submit"
              onClick={searchBar}
              className="secondary-button"
            >
              <FontAwesomeIcon icon={faSearch} fontSize={22} className="test" />
            </button>
          </div>
        )}
        <button type="submit" className={darkMode ? "main-button color-light" : "main-button color-dark"} onClick={mainSearchBar}>
          <FontAwesomeIcon icon={faSearch} fontSize={22} />
        </button>
        <button type="submit" onClick={searchBar} className="secondary-button">
          <FontAwesomeIcon icon={faSearch} fontSize={22} />
        </button>
      </form>

      <div className="header_icons">
        <RiVideoAddFill size={30} />
        <MdApps size={30} />
        {localStorage.getItem("yt-accessToken") && <MdNotifications size={30} />}
        {!localStorage.getItem("yt-accessToken") &&  <BsThreeDotsVertical size={30} />}
        <div className="header_relative">
          {localStorage.getItem("yt-accessToken") ? (
            <img
              src={user.photoUrl}
              className="header_avatar"
              onClick={() => dispatch(profile_toggle())}
            />
          ) : (
            <LoginScreen />
          )}
          {profile_toggle1 && <Profile />}
          {showTheme && <Theme />}
        </div>
      </div>
    </div>
  );
}
