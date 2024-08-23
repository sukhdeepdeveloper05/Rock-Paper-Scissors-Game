import React from "react";
import "./Header.css";
import Logo from "../images/logo.svg";

export const Header = (props) => {
  return (
    <div className="header-container">
      <img className="logo" src={Logo} alt="logo" />
      <div className="score-container">
        <h3>Score</h3>
        <span>{props.score < 0 ? 0 & props.setScore(0) : props.score}</span>
      </div>
    </div>
  );
};
