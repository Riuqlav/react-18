import React from "react";
import { useState } from "react";

const Form = () => {
  const [username, setusername] = useState("");
  return (
    <form>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(event) => setusername(event.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;
