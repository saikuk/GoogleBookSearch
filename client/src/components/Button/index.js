import React from "react";
import "./style.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button(props) {
  return (
    <button {...props}  className="btn btn-dark">
      {props.children}
    </button>
  );
}

export default Button;