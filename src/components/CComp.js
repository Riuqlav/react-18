import React from "react";

const CComp = (props) => {
  return (
    <div>
      <button onClick={props.greetHandler}>Say hello to mom</button>
    </div>
  );
};

export default CComp;
