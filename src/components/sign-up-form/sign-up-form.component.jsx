import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

import { SignUpFormContainer } from "./sign-up-form.styles";

const SignUpForm = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
  });

  const { email, displayName, password, confirmPassword } = userCredentials;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match!");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <SignUpFormContainer>
      <h2>Don't have an account?</h2>
      <div>Sign up today.</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          placeholder="Display name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          placeholder="Email address"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          placeholder="Confirm password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </SignUpFormContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUpForm);
