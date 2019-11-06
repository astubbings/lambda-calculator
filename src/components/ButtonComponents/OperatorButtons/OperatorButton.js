import React from "react";

const OperatorButton = props => {
  console.log(props);
  return (
    <button>
      <span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.button.char}
      </span>
    </button>
  );
};

export default OperatorButton;
