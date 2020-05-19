import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const HeaderContainer = styled.header`
  ${FlexCenter}
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  background: dodgerblue;

  a {
    transition: all 0.3s;

    &:hover {
      color: red;
    }
  }

  div:first-child {
    ${FlexCenter}
    padding-left: 2rem;
    height: 7rem;

    a {
      height: 100%;

      img {
        height: 100%;
      }
    }
  }
`;

export const Nav = styled.nav`
  width: 60%;
  padding-right: 2rem;

  ul {
    ${FlexCenter}
    justify-content: space-between;
  }
`;
