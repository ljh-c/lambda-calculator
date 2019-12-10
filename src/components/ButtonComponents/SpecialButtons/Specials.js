import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials);

  return (
    <div className="specials-container">
      {specialState.map(special => {
        return <SpecialButton key={`${special}`} special={special} />;
      })}
    </div>
  );
};

export default Specials;