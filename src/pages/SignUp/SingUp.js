import React from "react";

import "../../components/Form/Form.css";
import LoginLayout from "../../components/LoginLayout";

function SingUp(props) {
  return (
    <LoginLayout>
      <h1>Sign Up</h1>
      <form
        action=""
        className="form login__form"
        onSubmit={() => {
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

        <button type="submit">Create</button>
      </form>
    </LoginLayout>
  );
}

export default SingUp;
