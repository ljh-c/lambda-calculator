import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);

  return (
    <div className="container-numbers">
      {numberState.map(number => {

        if (number === 0) {
          return <NumberButton key={`${number}`} number={number} className="big"/>
        }

        return <NumberButton key={`${number}`} number={number} />;
      })}
    </div>
  );
};

export default Numbers;