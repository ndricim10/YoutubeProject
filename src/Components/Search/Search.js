import React from "react";
import "./Search.scss";
import SearchVideo from "./SearchVideo/SearchVideo";

export default function Search() {
  return (
    <div className="search_results">
        {
            [...new Array(100)].map((e, i) => (
                <SearchVideo />  
            ))
        }
    </div>
  );
}
