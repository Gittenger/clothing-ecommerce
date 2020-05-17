import React from "react";

import { HeaderContainer, Nav } from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <div>Logo</div>
    <Nav>
      <ul>
        <li>Shop</li>
        <li>About Us</li>
        <li>Checkout</li>
        <li>Login</li>
      </ul>
    </Nav>
  </HeaderContainer>
);

export default Header;
