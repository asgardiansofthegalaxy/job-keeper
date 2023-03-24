import React from "react";
import { Route, Routes } from "react-router-dom";
import Team from "./Team";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
import Dashboard from "./Dashboard";

import CarlosImage from "../assets/carlos_trejo.jpeg";
import JuanImage from "../assets/juan_trejo.jpeg";

import "../styles/Content.css";

const teamMembers = [
  {
    id: 1,
    name: 'Juan Trejo',
    description: 'Juan Trejo is a software engineer with 5+ years of experience in building scalable systems at high-growth companies like Cummins, Enthought, and Indeed. He has designed, built, operated, and optimized many interesting distributed systems used by millions of users.',
    image: JuanImage,
  },
  {
    id: 2,
    name: 'Carlos Trejo',
    description: 'Carlos Trejo is a software engineer with 5+ years of experience in building scalable systems at high-growth companies like Zello, IBM, and Udemy. He has designed, built, operated, and optimized many interesting distributed systems used by millions of users.',
    image: CarlosImage,
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
            <Route path="/our-team" element={<Team members={teamMembers} />} />
          </Route>
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </div>
    </div>
  );
}

export default Content;
