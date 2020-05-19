import styled from "styled-components";

// import { FlexCenter } from "../../style-utils/utils.styles";

export const FormContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme: { colors } }) => colors.whiteLight};

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.7rem;
  }

  input {
    margin-bottom: 0.5rem;
    width: 90%;
  }
`;
