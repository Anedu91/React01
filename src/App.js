import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tool from "./components/Tool";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <main className="main">
        <Filter />
        <div className="container">
          <Tool />
        </div>
        <div className="reviews"></div>
      </main>
    </div>
  );
}

export default App;
