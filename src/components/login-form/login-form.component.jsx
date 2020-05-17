import React, { useState } from "react";

import { LoginFormContainer } from "./login-form.styles";

const LoginForm = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <LoginFormContainer>
      <h2>Already have an account? Sign in here.</h2>
      <div>Sign in with your email and password.</div>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          label="email"
          value={email}
          required
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          label="password"
          value={password}
          required
        />{" "}
        <div>
          <button type="submit">Sign in</button>
          <button>Sign in with Google</button>
        </div>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
