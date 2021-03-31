import React from "react";

import "./Typewritter.scss";

const Typewritter = ({ text }) => {
  return (
    <React.Fragment>
      <span className="console-arrow">{">"}</span>
      <p className="typewritter anim-typewriter">{text}</p>
    </React.Fragment>
  );
};

export default Typewritter;
