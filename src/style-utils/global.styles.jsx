import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.black};
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

li {
    list-style: none;
}

a {
    color: unset;
    text-decoration: none;
}

a:link,
a:visited {
    color: unset
}

#root {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    justify-content: center;
}
`;

export default GlobalStyles;
