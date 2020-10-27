import React, { useState } from "react";

import DefaultLayout from "../../components/DefaultLayout";
import Tool from "../../components/Tool";
import Filter from "../../components/Filter";

import * as api from "../../api";

function Home() {
  // Crear el estado
  const [showFavorites, setShowFavorites] = useState(false);
  const [tools, setTools] = useState(api.Tools.list());

  // Crear metodo que cambia el favorite
  const onToggleFavorite = (id) => {
    setTools(
      tools.map((tool) => {
        if (tool.id === id) {
          return {
            ...tool,
            is_favorite: tool.is_favorite ? false : true,
          };
        } else {
          return tool;
        }
      })
    );
  };

  let favoriteCount = 0;

  tools.forEach((tool) => {
    if (tool.is_favorite) {
      favoriteCount++;
    }
  });
  return (
    <DefaultLayout>
      <div className="container">
        <Filter
          onToggleFilterFavorites={() => setShowFavorites(!showFavorites)}
        />
        <p>Favorite count: {favoriteCount}</p>
        <ul className="tool__list">
          {tools
            .filter((tool) => {
              if (showFavorites) {
                return tool.is_favorite;
              }

              return true;
            })
            .map((tool) => (
              <li key={tool.id} className="tool">
                <Tool
                  tool={tool}
                  onToggleFavorite={() => onToggleFavorite(tool.id)}
                />
              </li>
            ))}
        </ul>
      </div>
    </DefaultLayout>
  );
}
export default Home;
