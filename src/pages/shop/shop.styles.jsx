import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const ShopPageContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
  width 100%;
  padding-top: 2rem;
  

  .shop-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
    padding: 1rem 0;
    width: 90%;
  }

  .shop-item {
    img{
      width: 100%;
    }
  }
`;
