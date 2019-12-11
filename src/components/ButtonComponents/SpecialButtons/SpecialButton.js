import React from "react";

const SpecialButton = (props) => {
  if (props.special === 'C') {
    return (
      <button className="btn-special" onClick={() => props.clear()}>
        {props.special}
      </button>
    )
  }
  
  // if (props.special === '+/-') {
  //   return (
  //     <button className="btn-special" onClick={() => props.negative()}>
  //       {props.special}
  //     </button>
  //   )
  // }

  return (
    <button className="btn-special" onClick={() => props.handleClick(props.special)}>
      {props.special}
    </button>
  );
};

export default SpecialButton;