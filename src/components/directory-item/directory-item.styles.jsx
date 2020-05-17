import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const DirectoryItemContainer = styled.div`
  background-image: ${({ imageUrl }) => `url("${imageUrl}")`};
  background-size: stretch;
  background-repeat: no-repeat;
  background-position: center center;
  height: 30rem;
`;
