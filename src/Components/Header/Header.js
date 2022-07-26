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
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Profile from "../../Screens/LoginScreen/Profile";
import { profile_toggle, theme_false } from "../../Redux/Reducers/actionType";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import Theme from "../../Screens/LoginScreen/Theme";
import ThreeDots from "../../Screens/LoginScreen/ThreeDots";
import "../../Screens/LoginScreen/loginScreen.scss";
import DarkMode from "../../Screens/DarkModeMUI/DarkMode";
import { FiLogIn } from "react-icons/fi";

export default function Header() {
  const userEmail = useSelector((state) => state.loginEmail.user);
  const [search, setSearch] = useState(false);
  const { width } = WindowSize();
  const [sideBar, setSideBar] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const profile_toggle1 = useSelector((state) => state.profile_toggle);
  const showTheme = useSelector((state) => state.Theme);
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  function mainSearchBar(event) {
    event.preventDefault();
    if (input.length > 0) {
      navigate(`../search/${input}`, { replace: true });
    }
  }
  function searchBar(event) {
    event.preventDefault();
    setSearch(true);

    if (input.length > 0) {
      navigate(`../search/${input}`, { replace: true });
    }
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
  const myUser = JSON.parse(localStorage.getItem("yt-user"));

 const photoURL = () => {
    if (user) {
      return user.photoUrl;
    }
    else if (userEmail) {
      if (myUser.photoURL) {
        return myUser.photoURL;
      } else {
        return "https://flyclipart.com/thumb2/default-avatar-png-icon-free-download-518373.png";
      }
    } 
  };

  function openProfile() {
    dispatch(profile_toggle());
    dispatch(theme_false());
  }

  window.addEventListener("resize", () => {
    if (width > 576) {
      setSearch(false);
    }
  });


  function handleSubmit(event) {
    event.preventDefault();
    if (input.length > 0) {
      navigate(`../search/${input}`, { replace: true });
    }
  }

  return (
    <div
      className={
        !localStorage.getItem("dark") ? "header light-mode" : "header dark-mode"
      }
    >
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
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
          className={darkMode ? "input color-light" : "input color-dark"}
        />
        {search && (
          <div
            className={
              darkMode ? "small_search light-mode" : "small_search dark-mode"
            }
          >
            <BiArrowBack
              className="arrow-back"
              size={25}
              onClick={hideSearch}
            />
            <input
              type="search"
              placeholder="Search"
              className={
                darkMode ? "small-input color-light" : "small-input color-dark"
              }
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              onClick={searchBar}
              className="secondary-button"
            >
              <FontAwesomeIcon
                onClick={handleSubmit}
                icon={faSearch}
                fontSize={22}
                className={darkMode ? "test color-light" : "test color-dark"}
              />
            </button>
          </div>
        )}
        <button
          type="submit"
          className={
            darkMode ? "main-button color-light" : "main-button color-dark"
          }
          onClick={mainSearchBar}
        >
          <FontAwesomeIcon
            icon={faSearch}
            fontSize={22}
            className={darkMode ? "color-light" : "color-dark"}
          />
        </button>
        <button
          type="submit"
          onClick={searchBar}
          className={
            darkMode
              ? "secondary-button color-light"
              : "secondary-button color-dark"
          }
        >
          <FontAwesomeIcon
            icon={faSearch}
            fontSize={22}
          />
        </button>
      </form>

      <div className="header_icons">
        {localStorage.getItem("yt-accessToken") ||
        localStorage.getItem("email-accessToken") ? (
          <RiVideoAddFill size={30} />
        ) : null}
        <MdApps size={30} />
        {localStorage.getItem("yt-accessToken") ||
        localStorage.getItem("email-accessToken") ? (
          <MdNotifications size={30} />
        ) : null}
        <div className="dots">
          {!localStorage.getItem("yt-accessToken") &&
            !localStorage.getItem("email-accessToken") && (
              <>
                <DarkMode />
              </>
            )}
        </div>
        <div className="header_relative">
          {localStorage.getItem("yt-accessToken") ||
          localStorage.getItem("email-accessToken") ? (
            <img
              src={photoURL()}
              className="header_avatar"
              onClick={openProfile}
            />
          ) : (
            <div className="signInUp">
              <Link to="/login" className="link">
                <div>
                  <FiLogIn size={20} />
                </div>
                <button className={darkMode ? "color-light" : "color-dark"}>
                  Login
                </button>
              </Link>
              {/* <Link to="/signup"><button className={darkMode? "color-light" : "color-dark"}>Sign Up</button></Link> */}
            </div>
          )}

          {profile_toggle1 && <Profile />}
          {showTheme && <Theme />}
        </div>
      </div>
    </div>
  );
}
