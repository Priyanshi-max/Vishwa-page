import React from "react";
import Header from "../components/Header/Header";
import LitContent from "../components/LitContent/LitContent";
import Occasion from "../components/Ocassion/Occasion";

import "./HomePage.css";

const Homepage = () => {
  return (
    <div className="box">
      <Header />
      <LitContent />
      <Occasion />
    </div>
  );
};

export default Homepage;
