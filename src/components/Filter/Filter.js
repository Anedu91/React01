import React from "react";
import "./Filter.css";

function Filter(props) {
  return (
    <div className="filter">
      <p>Show Favorites</p>
      <button>
        <input
          className="tgl tgl-flip"
          type="checkbox"
          onClick={props.onToggleFilterFavorites}
          id="favorite"
        />
        <label
          className="tgl-btn"
          data-tg-off="Nope"
          data-tg-on="Yeah!"
          htmlFor="favorite"
        ></label>
      </button>
    </div>
  );
}
export default Filter;
