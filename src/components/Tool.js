import React from "react";
import "../App.css";
import reactLogo from "../logo.svg";

function Tool() {
  return (
    <div className="tool">
      <img src={reactLogo} className="tool__image" alt="logo" />
      <p className="tool__content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        soluta eius nobis doloribus corrupti sunt.
      </p>
      <nav className="tool__navigation">
        <a href="#" className="tool__link">
          Fav
        </a>
        <a href="#" className="tool__link">
          Rating
        </a>
        <a href="#" className="tool__link">
          Go to page
        </a>
      </nav>
    </div>
  );
}
export default Tool;
