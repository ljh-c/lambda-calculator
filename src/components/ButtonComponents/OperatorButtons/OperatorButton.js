import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="btn-operator" onClick={() => props.handleClick(props.value)}>
      {props.char}
    </button>
  );
};

export default OperatorButton;