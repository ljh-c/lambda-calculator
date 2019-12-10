import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="btn-operator">
      {props.operator}
    </button>
  );
};

export default OperatorButton;