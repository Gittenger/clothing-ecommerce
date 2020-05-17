import React from "react";

import Header from "./components/header/header.component";
import Directory from "./components/directory/directory.component";

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
          <Directory />
        </InnerContainer>
      </OuterContainer>
    </>
  );
}

export default App;
