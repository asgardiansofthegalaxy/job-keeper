import React from 'react';
import { Link } from "react-router-dom";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <h2 className="section-title">Let us help you <b>find</b> your dream job</h2>
      <div className="more">
        <Link
          className="button"
          to="/dashboard"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
