import React from "react";

const NumberButton = propsNums => {
  console.log(propsNums);
  return (
    <button className="number_button">
      
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {propsNums.button}
      
    </button>
  );
};

export default NumberButton;