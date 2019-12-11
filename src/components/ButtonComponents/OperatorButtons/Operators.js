import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState] = useState(operators);

  return (
    <div className="operators-container">
      {operatorState.map(operator => {
        return <OperatorButton key={`${operator.char}`} char={operator.char} value={operator.value} handleClick={props.handleClick} calculate={props.calculate} />;
      })}
    </div>
  );
};

export default Operators;