import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
  return <button class="btn">{props.label}</button>;
};

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
