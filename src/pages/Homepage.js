import React from "react";
import Header from "../components/Header/Header";
import LitContent from "../components/LitContent/LitContent";
import "./HomePage.css";
import Occasion from "../components/Ocassion/Occasion";

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
