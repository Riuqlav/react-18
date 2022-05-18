import React from "react";

const ClickHandler = () => {
  const buttonCheck = () => {
    console.log("thank you daddy");
  };
  return (
    <div>
      <button onClick={buttonCheck}>Click me daddy</button>
    </div>
  );
};

export default ClickHandler;
