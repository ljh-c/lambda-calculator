import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="btn-special" onClick={() => props.handleClick(props.special)}>
      {props.special}
    </button>
  );
};

export default SpecialButton;