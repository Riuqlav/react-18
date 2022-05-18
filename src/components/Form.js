import React from "react";
import { useState } from "react";

const Form = () => {
  const [username, setusername] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form data is ${username}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(event) => setusername(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
