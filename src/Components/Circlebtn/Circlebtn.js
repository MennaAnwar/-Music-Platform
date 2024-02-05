import React, { FC } from "react";
import "./Circlebtn.css";

const CircleBtn = ({ clickHandler, active }) => {
  return (
    <div className={`trigger${active ? " active" : ""}`} onClick={clickHandler}>
      <span />
    </div>
  );
};

export default CircleBtn;
