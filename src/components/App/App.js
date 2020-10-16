import React from "react";
import "./App.css";

import * as api from "../../api";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Tool from "../Tool";
import Filter from "../Filter";

function App() {
  const tools = api.Tools.list();

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <main className="main">
        <Filter />
        <div className="container">
          <ul>
            {tools.map((tool) => (
              <li key={tool.id}>
                <Tool tool={tool} />
              </li>
            ))}
          </ul>
        </div>
        <div className="reviews"></div>
      </main>
    </div>
  );
}

export default App;
