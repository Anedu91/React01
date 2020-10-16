import React from "react";
// import cx from "classnames";
import { BsHeart, BsHeartFill } from "react-icons/bs";

import "./Tool.css";
// import ToolLink from "./ToolLink"
// import ToolFilter from "../Foo"
// import ToolFilter from "../Bar"
// import ToolFilter from "../Bar/HelloWorld"
// import ToolFilter from "../../FooBar"
// import ToolFilter from "../../FooBarBaz"
// import ToolFilter from "../../../Baz"

// import * as api from '../../api'
// import * as api from '../../api'

// import toolImage from  './images/too.jpg'

function Tool(props) {
  const headingClassName = "";
  // const headingClassName = cx(
  //   "text-xl font-bold",
  //   props.tool.is_favorite && "text-pink"
  // );

  return (
    <div className="tool">
      <img src={props.tool.image_url} className="tool__image" alt="logo" />
      <article className="tool__content">
        <h3 className={headingClassName}>
          {props.tool.title} {props.tool.rating >= 4 ? "⭐️" : null}
        </h3>
        <p>{props.tool.description}</p>
      </article>

      <nav className="tool__navigation">
        <a href="#" className="tool__link">
          {props.tool.is_favorite ? <BsHeart /> : <BsHeartFill />}
        </a>

        <a href="#" className="tool__link">
          {props.tool.rating}
        </a>
        <a href={props.tool.url} className="tool__link">
          Go to page
        </a>
      </nav>
    </div>
  );
}
export default Tool;
