import React from "react";
import "./Ocassion.css";
import IconCard from "../IconCard/IconCard";

const Occasion = () => {
  return (
    <div className="Occasion">
      <div className="occasion-text">
        <span>Ocassion: </span>
        <ul className="occasion-list">
          <li style={{ color: "#DA4C76" }}>Birthdays</li>
          <li>Marriages</li>
          <li>Deaths</li>
        </ul>
      </div>
      <IconCard />
    </div>
  );
};

export default Occasion;
