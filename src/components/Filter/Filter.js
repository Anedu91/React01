import React from "react";
import "./Filter.css";

function Filter(props) {
  return <button onClick={props.showFavorites}>Show Favorites</button>;
}
export default Filter;
