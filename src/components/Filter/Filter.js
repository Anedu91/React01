import React from "react";
import "./Filter.css";

function Filter(props) {
  return (
    <button onClick={props.onToggleFilterFavorites}>Toggle Favorites</button>
  );
}
export default Filter;
