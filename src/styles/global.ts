import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: var(--jadri-color-1-hex);
    color: black;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }

  :root {
    --background-color:#;
    --text-primary: blue;
  }
:root{
  
/* Color Theme Swatches in Hex */

  --jadri-color-1-hex: #FAFAFA;
  --jadri-color-2-hex: #FAC255;
  --jadri-color-3-hex: #74DBD7;
  --jadri-color-4-hex: #8DDB46;
  --jadri-color-5-hex: #6E42F5;
  

  /* Color Cards */

  --jadri-color-cards: #F0F0F5;

  /* Color Text */

  --jadri-color-text-1-hex:#020202;
  --jadri-color-text-success: #8DDB46;
  --jadri-color-text-error:#C94D3F;



}
`;
