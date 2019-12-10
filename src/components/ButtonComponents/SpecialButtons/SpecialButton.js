import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="btn-special">
      {props.special}
    </button>
  );
};

export default SpecialButton;