import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}

img{
   max-width: 100%;
  height: auto;
  vertical-align: middle;
  font-style: italic;
  background-repeat: no-repeat;
  background-size: cover;
  shape-margin: 1rem;
}




`;
export default GlobalStyle;
