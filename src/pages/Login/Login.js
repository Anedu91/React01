import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import LoginLayout from "../../components/LoginLayout";
import "../../components/Form/Form.css";
function Login(props) {
  const location = useLocation();
  const history = useHistory();
  return (
    <LoginLayout>
      <h1>Login</h1>
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

        <button type="submit">Login</button>
      </form>
    </LoginLayout>
  );
}

export default Login;
