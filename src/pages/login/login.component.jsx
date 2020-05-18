import React from "react";

import LoginForm from "../../components/login-form/login-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { LoginPageContainer } from "./login.styles";

const LoginPage = () => (
  <LoginPageContainer>
    <LoginForm />
    <SignUpForm />
  </LoginPageContainer>
);

export default LoginPage;
