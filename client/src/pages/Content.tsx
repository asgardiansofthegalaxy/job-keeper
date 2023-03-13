import React from "react";
import { Route, Routes } from "react-router-dom";
import Team from "./Team";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";

function App() {
  return (
    <div className="Content">
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/team" Component={Team} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
