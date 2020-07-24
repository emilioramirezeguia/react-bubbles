import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const initialUser = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initialUser);

  const handleChanges = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const loginUser = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Please login to continue</p>
      <form onSubmit={loginUser}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={user.username}
          onChange={handleChanges}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="text"
          value={user.password}
          onChange={handleChanges}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;
