import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import "./Form.css";

function Form(props) {
  const location = useLocation();
  const history = useHistory();

  const isSignup = location.path === "/signup";

  return (
    <form
      action=""
      className="form login__form"
      onSubmit={() => {
        history.replace("/");
        // history.replace("/tools/:id")
      }}
    >
      <div className="form__group">
        <label htmlFor="username" className="form__label">
          UserName
        </label>
        <input
          type="text"
          className="form__input"
          placeholder="Username"
          id="username"
        />
      </div>
      <div className="form__group">
        <label htmlFor="password" className="form__label">
          Password
        </label>
        <input
          type="password"
          className="form__input"
          placeholder="Password"
          id="password"
        />
      </div>

      {isSignup ? (
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

      <button type="submit">{isSignup ? "Create" : "Login"}</button>
    </form>
  );
}

export default Form;
