import React, { useState } from "react";
import { connect } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";

import { LoginFormContainer } from "./login-form.styles";

const LoginForm = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
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
          placeholder="Email address"
          required
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          label="password"
          value={password}
          placeholder="Password"
          required
        />
        <div>
          <button type="submit">Sign in</button>
          <button type="button" onClick={googleSignInStart}>
            Sign in with Google
          </button>
        </div>
      </form>
    </LoginFormContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(LoginForm);
