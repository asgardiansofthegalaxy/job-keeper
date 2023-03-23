import React from "react";
import { Route, Routes } from "react-router-dom";
import Team from "./Team";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
import Dashboard from "./Dashboard"

import "../styles/Content.css";

const teamMembers = [
  {
    id: 1,
    name: 'Juan Trejo',
    pictureUrl: 'https://example.com/alice.jpg',
  },
  {
    id: 2,
    name: 'Carlos Trejo',
    pictureUrl: 'https://example.com/bob.jpg',
  },
];

const Content = () => {
    return (
    <div className="Content">
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/team" element={<Team members={teamMembers} />} />
          </Route>
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </div>
    </div>
  );
}

export default Content;
