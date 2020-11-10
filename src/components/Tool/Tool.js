import React from "react";
import { Link } from "react-router-dom";
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
        <button
          href="#"
          className="tool__link"
          onClick={props.onToggleFavorite}
        >
          {props.tool.is_favorite ? <BsHeartFill /> : <BsHeart />}
        </button>

        <a href="#" className="tool__link">
          {props.tool.rating}
        </a>

        <Link to={`/tools/${props.tool.id}`} className="tool__link">
          Go to page
        </Link>
      </nav>
    </>
  );
}
export default Tool;
