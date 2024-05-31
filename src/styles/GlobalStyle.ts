import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 2rem 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
`;
 
export default GlobalStyle;