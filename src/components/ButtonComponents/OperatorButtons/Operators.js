import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState] = useState(operators);

  return (
    <div className="container-operators">
      {operatorState.map(operator => {
        return <OperatorButton key={`${operator.char}`} operator={operator.char} />;
      })}
    </div>
  );
};

export default Operators;