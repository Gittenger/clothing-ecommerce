import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer, Nav } from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <div>
      <Link to="/">Logo</Link>
    </div>
    <Nav>
      <ul>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </Nav>
  </HeaderContainer>
);

export default Header;
