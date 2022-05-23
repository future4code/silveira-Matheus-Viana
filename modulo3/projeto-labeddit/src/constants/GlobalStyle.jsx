import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
  }
  *{
    font-family: 'Noto Sans', sans-serif;
  }
`;

export default GlobalStyle;