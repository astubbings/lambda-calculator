import React, {useState} from "react";
//import any components needed
//Import your array data to from the provided data file
import OperatorButton from "./OperatorButton"
import { operators } from "../../../data";

export default function Operators() {

const [operatorButton] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operatorButton.map((button, index) => (
        <OperatorButton key={index} button={button} />
      ))}

    </div>
  );
};
