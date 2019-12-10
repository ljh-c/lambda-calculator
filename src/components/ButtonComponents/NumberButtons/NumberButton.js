import React from "react";

const NumberButton = (props) => {
  return (
    <button className="btn-number">
      {props.number}
    </button>
  );
};

export default NumberButton;