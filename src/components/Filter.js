import React from "react";
import "../App.css";

function Filter() {
  return (
    <form className="filter">
      <div className="form__group">
        <label className="form__label">Date</label>
        <select>
          <option value="1">First Option</option>
        </select>
      </div>
      <div className="form__group">
        <label className="form__label">Most review</label>
        <select>
          <option value="1">First Option</option>
        </select>
      </div>
      <div className="form__group">
        <label className="form__label">Most favorite</label>
        <select>
          <option value="1">First Option</option>
        </select>
      </div>
      <div className="form__group">
        <label className="form__label">Search</label>
        <select>
          <option value="1">First Option</option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}
export default Filter;
