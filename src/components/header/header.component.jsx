import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { HeaderContainer, Nav } from "./header.styles";

const Header = ({ currentUser, signOutStart }) => (
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
          {currentUser ? (
            <Link to="/" onClick={signOutStart}>
              Log out
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </Nav>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
