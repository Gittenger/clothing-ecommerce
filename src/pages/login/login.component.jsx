import React from "react";

import LoginForm from "../../components/login-form/login-form.component";

import { LoginPageContainer } from "./login.styles";

const LoginPage = () => (
  <LoginPageContainer>
    <div>This is the login page</div>
    <LoginForm />
  </LoginPageContainer>
);

export default LoginPage;
