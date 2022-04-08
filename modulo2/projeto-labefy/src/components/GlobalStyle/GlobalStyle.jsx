import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
    background-color: #0066ff;
    /* background-image: linear-gradient(180deg, #020525, #191194); */
    background-repeat: no-repeat;
    height: 100%;
    font-family: Poppins, Helvetica, Sans-Serif;
    color: white;
  }
`;

export default GlobalStyle;