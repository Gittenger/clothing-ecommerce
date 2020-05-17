import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import LoginPage from "./pages/login/login.component";

// import logo from './logo.svg';
import GlobalStyles from "./style-utils/global.styles";
import {
  OuterContainer,
  InnerContainer,
} from "./components/container/container.styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <OuterContainer>
        <InnerContainer>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
          </Switch>
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

export default App;
