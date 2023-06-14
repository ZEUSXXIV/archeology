import React from "react";
import "./HoverButton.css";

const HoverButton = ({ title, link }) => {
  return (
    <a href={link} target="_blank" >
    <button 
    onClick={() => console.log("link==>>", link)}
    class="btn_center">
      {title}
    </button>
    </a>
  );
};

export default HoverButton;
