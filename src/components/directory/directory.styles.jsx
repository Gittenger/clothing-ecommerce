import styled from "styled-components";

import { device } from "../../style-utils/utils.styles";

const { laptop, tablet, mobile } = device;

export const DirectoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding: 2rem;

  @media ${laptop} {
    grid-template-columns: repeat(3, 1fr);
    padding: 1.5rem;
  }

  @media ${tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
  }

  @media ${mobile} {
    grid-template-columns: 1fr;
    padding: 0.8rem;
  }
`;
