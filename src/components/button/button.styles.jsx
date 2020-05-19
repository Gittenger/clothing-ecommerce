import styled, { css } from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

const normalStyles = css`
  background-color: lightgrey;

  &:hover {
    background-color: #fff;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

const getStyles = (props) =>
  props.googleSignIn ? googleSignInStyles : normalStyles;

export const ButtonComponent = styled.button`
  padding: 0.5rem;
  border-radius: 0.4rem;
  min-width: 10rem;

  ${getStyles}
`;
