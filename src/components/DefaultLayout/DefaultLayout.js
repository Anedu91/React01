import React from "react";

import "./DefaultLayout.css";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <Sidebar />

      <main className="main">{children}</main>
    </div>
  );
}

export default DefaultLayout;
