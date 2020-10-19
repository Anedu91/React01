import React, { useState } from "react";
import "./App.css";

import * as api from "../../api";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Filter from "../Filter";
import Tool from "../Tool";

function App() {
  // Crear el estado
  const [tools, setTools] = useState(api.Tools.list());
  // Crear metodo que cambia el favorite
  const onToggleFavorite = (id) => {
    setTools(
      tools.map((item) => {
        if (item.id === id) {
          let itemFavorite = item.is_favorite ? false : true;
          item.is_favorite = itemFavorite;
          return item;
        } else {
          return item;
        }
      })
    );
  };

  const showFavorites = () => {
    setTools(tools.filter((item) => item.is_favorite));
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
          <Filter showFavorites={showFavorites} />
          <p>Favorite count: {favoriteCount}</p>
          <ul className="tool__list">
            {tools.map((tool) => (
              <li key={tool.id} className="tool">
                <Tool
                  tool={tool}
                  onToggleFavorite={() => onToggleFavorite(tool.id)}
                />
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
