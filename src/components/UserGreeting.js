import React from "react";
const isLoggedIn = false;

const UserGreeting = () => {
  return (
    <h1>
      Welcome to the internet{" "}
      {isLoggedIn
        ? "have a look around"
        : "anything that brain of your think of can be found "}{" "}
    </h1>
  );
};

export default UserGreeting;
