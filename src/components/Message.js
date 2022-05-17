import React from "react";
import { useState } from "react";

const Message = (props) => {
  const [message, setMessage] = useState("Welcome visitor");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Thank you for clicking")}>
        {" "}
        Click{" "}
      </button>
    </div>
  );
};

export default Message;
