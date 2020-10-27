import React from "react";
// import cx from "classnames";
import { BsHeart, BsHeartFill } from "react-icons/bs";

import "./Tool.css";

function Tool(props) {
  const headingClassName = "";
  // const headingClassName = cx(
  //   "text-xl font-bold",
  //   props.tool.is_favorite && "text-pink"
  // );

  return (
    <>
      <img src={props.tool.image_url} className="tool__image" alt="logo" />
      <article className="tool__content">
        <h3 className={headingClassName}>
          {props.tool.title} {props.tool.rating >= 4 ? "⭐️" : null}
        </h3>
        <p>{props.tool.description}</p>
      </article>
      <nav className="tool__navigation">
        <a href="#" className="tool__link" onClick={props.onToggleFavorite}>
          {props.tool.is_favorite ? <BsHeartFill /> : <BsHeart />}
        </a>

        <a href="#" className="tool__link">
          {props.tool.rating}
        </a>
        <a href={props.tool.url} className="tool__link">
          Go to page
        </a>
      </nav>
    </>
  );
}
export default Tool;
