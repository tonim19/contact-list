import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
  font-size: 14px;
  line-height: 17px;
  background-color: #ffffff;
}

@media screen and (min-width: 1440px) {
  body {
    font-size: 18px;
    line-height: 22px;
  }
}
`;
