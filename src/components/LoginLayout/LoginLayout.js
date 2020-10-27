import React from "react";

import "./LoginLayout.css";

import Navbar from "../Navbar";
function LoginLayout({ children }) {
  return (
    <div className="login">
      <Navbar />

      <main className="login__main">{children}</main>
    </div>
  );
}

export default LoginLayout;
