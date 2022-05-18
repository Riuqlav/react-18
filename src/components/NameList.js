import React from "react";

const NameList = () => {
  const names = ["Double", "Cheeked up", "Thursday", "Afternoon"];
  return (
    <div>
      {names.map((name) => {
        return <h2> {name} </h2>;
      })}
    </div>
  );
};

export default NameList;
