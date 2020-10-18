import React, { useState } from "react";
import "./App.css";

import * as api from "../../api";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Tool from "../Tool";

function App() {
  // Crear el estado
  const [tools, setTools] = useState(api.Tools.list());
  // Crear metodo que cambia el favorite
  const onToggleFavorite = () => {
    console.log(tools);
    // setTools(tool.is_favorite ? false : true);
  };

  let favoriteCount = 0;

  tools.forEach((tool) => {
    return tool.is_favorite ? favoriteCount++ : favoriteCount;
  });

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <main className="main">
        <div className="container">
          <p>Favorite count: {favoriteCount}</p>
          <ul className="tool__list">
            {tools.map((tool) => (
              <li key={tool.id} className="tool">
                <Tool tool={tool} onToggleFavorite={onToggleFavorite} />
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
