import React from "react";
import CComp from "./CComp";

const PComp = () => {
  const sayHello = () => alert("Hi mom");

  return <CComp greetHandler={sayHello} />;
};

export default PComp;
