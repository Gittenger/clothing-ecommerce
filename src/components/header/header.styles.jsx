import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const HeaderContainer = styled.header`
  ${FlexCenter}
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  background: dodgerblue;
`;

export const Nav = styled.nav`
  width: 60%;

  ul {
    ${FlexCenter}
    justify-content: space-between;
  }
`;
