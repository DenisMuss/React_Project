import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  @media (max-width: 600px) {
    body {
      font-size: 16px;
    }
  }
`;

export default GlobalStyle;