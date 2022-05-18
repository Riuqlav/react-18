import React from "react";
const isLoggedIn = true;

const UserGreeting = () => {
  return <h1>Welcome to the internet {isLoggedIn && "have a look around"}</h1>;
};

export default UserGreeting;
