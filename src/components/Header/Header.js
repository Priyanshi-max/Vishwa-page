import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [showFullContent, setShowFullContent] = useState(false);
  const content = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only
  five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with
  the release of Letraset sheets containing Lorem Ipsum passages, and
  more recently with desktop publishing software like Aldus PageMaker
  including versions of Lorem Ipsum`;
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  return (
    <div className="header">
      <div className="content-container">
        <div className="heading">
          <h3>Birthdays, Marriages & Death</h3>
        </div>
        <p className="sub-heading">Lorem ipsum dolor sit amet</p>
        <p className="content">
          {showFullContent
            ? content
            : `${content.split(" ").slice(0, 40).join(" ")}...`}
        </p>
        {!showFullContent && <span onClick={toggleContent}>Read More..</span>}
        <div className="btn">
          <button className="video-button">Watch Video</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
