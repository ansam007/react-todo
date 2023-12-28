import React from "react";
import "./Button.css";

const Button = (props) => {
  const valid = props.isValid;

  return (
    <button
      style={{ backgroundColor: !valid ? "#FF7276" : "#ac0e77" }}
      type={props.type}
      className="button"
    >
      {props.children}
    </button>
  );
};

export default Button;