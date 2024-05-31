import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #c8ce9f;
  --secondary-color: #691d04;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  --info-color: #17a2b8;
  --light-color: #db4206;
  --dark-color: #82350b;
}  

body {
    margin: 0;
    padding: 2rem 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
