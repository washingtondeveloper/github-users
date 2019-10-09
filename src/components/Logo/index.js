import React from "react";

import logo from "../../assets/git.png";
import "./styles.css";

export default function Logo() {
  return (
    <div className="gs-logo">
      <div>
        <img src={logo} alt="github" />
      </div>
      <h1>GitUsers</h1>
    </div>
  );
}
