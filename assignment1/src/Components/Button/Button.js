import React from "react";
import "./Button.scss";

const Button = (props) => {
  return <button class="btn">{props.label}</button>;
};

export default Button;
