import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #f8d1d1;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
      /* celulares */
      overflow: hidden;
    }
  }
`;
 
export default GlobalStyle;