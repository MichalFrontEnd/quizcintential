import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #c8ce9f;
  --secondary-color: #691d04;
  --background-color: #fffddd;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  --info-color: #17a2b8;
  --light-color: #db4206;
  --dark-color: #82350b;
  --dark-accent-color: #431300;
  --neutral-dark-color: #3a4854;
  --neutral-light-color: #a0b4cd;
  --neutral-accent-color: #D1D5DC;
}  

body {
    margin: 0;
    padding: 2rem 0;
    background: teal;
    box-sizing: border-box;
  }

  h1 {
    font-family: "Press Start 2P", system-ui;
    font-weight: 400;
  }

  h2, h3 {
    font-family: "Roboto Mono", monospace;
    font-weight: 600;
  }

  h4, h5, h6, p, button {
    font-family: "Roboto Mono", monospace;
  }
`;

export default GlobalStyle;
