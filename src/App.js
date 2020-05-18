import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import LoginPage from "./pages/login/login.component";

// import logo from './logo.svg';
import GlobalStyles from "./style-utils/global.styles";
import {
  OuterContainer,
  InnerContainer,
} from "./components/container/container.styles";

function App({ currentUser, checkUserSession }) {
  //automatic sign in
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <GlobalStyles />
      <OuterContainer>
        <InnerContainer>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route
              exact
              path="/login"
              render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
            ></Route>
          </Switch>
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
