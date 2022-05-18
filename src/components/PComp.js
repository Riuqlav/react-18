import React from "react";
import CComp from "./CComp";

const PComp = () => {
  const sayHello = (childName) => alert(`Hi mom ${childName}`);

  return <CComp greetHandler={sayHello} />;
};

export default PComp;
