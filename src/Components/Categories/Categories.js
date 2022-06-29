import React from "react";
import { useState } from "react";
import "./categories.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategoryVideos,
  getPopularVideos,
} from "../../Redux/Actions/videosAction";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Rock",
  "Alternative rock",
  "Sports",
  "Football",
  "World cup",
  "Metallica",
  "Nirvana",
  "Guns and Roses",
  "Coding",
  "Front end",
];

export default function Categories() {
  const [activeElement, setActiveElement] = useState("All");
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  function handleClick(value) {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getCategoryVideos(value));
    }
  }

  const categoriesKeywords = keywords.map((value, i) => {
    return (
      <span
        key={i}
        onClick={() => handleClick(value)}
        className={activeElement === value ? "active" : ""}
      >
        {value}
      </span>
    );
  });
  return (
    <div
      className={darkMode ? "categories light-mode" : "categories dark-mode"}
    >
      {categoriesKeywords}
    </div>
  );
}
