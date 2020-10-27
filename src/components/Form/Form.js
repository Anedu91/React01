import React from "react";

import "./Form.css";
function Form(props) {
  return (
    <form action="" className="form login__form">
      <div className="form__group">
        <label htmlFor="" className="form__label">
          UserName
        </label>
        <input type="text" className="form__input" placeholder="Username" />
      </div>
      <div className="form__group">
        <label htmlFor="" className="form__label">
          Password
        </label>
        <input type="password" className="form__input" placeholder="Password" />
      </div>
      {props.signup ? (
        <div className="form__group">
          <label htmlFor="" className="form__label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form__input"
            placeholder="Password"
          />
        </div>
      ) : null}
      <button type="submit">{props.signup ? "Create" : "Login"}</button>
    </form>
  );
}

export default Form;
