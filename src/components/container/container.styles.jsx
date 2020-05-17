import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { desktop } = device;

export const OuterContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 1440px;

  @media ${desktop} {
    width: 95vw;
  }
`;

export const InnerContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width: 1200px;

  @media ${desktop} {
    width: 90%;
  }
`;
