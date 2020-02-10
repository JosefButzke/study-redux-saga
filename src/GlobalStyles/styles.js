import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{    
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
    margin: 0;
    padding: 0;
  }
  body, input, button {
    font-size: 14px;
  }
`;