import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-image: linear-gradient(rgb(1,73,99) 25%, 75%, rgb(119, 180, 201));
    background-repeat: no-repeat;
  }
`;

export default GlobalStyle;
