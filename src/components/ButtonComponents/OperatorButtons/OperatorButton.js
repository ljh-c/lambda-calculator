import React from "react";

const OperatorButton = props => {

  if (props.char === '=') {
    return (<button className="btn-operator" onClick={() => props.calculate()}>
      {props.char}
    </button>);
  }

  return (
    <button className="btn-operator" onClick={() => props.handleClick(props.char)}>
      {props.char}
    </button>
  );
};

export default OperatorButton;