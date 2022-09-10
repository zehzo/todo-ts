import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  
  margin: 0;
  box-sizing: border-box;
  
  }

  body {
    background: ${props => props.theme["gray-300"]};
    padding: 100px 0px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: ${props => props.theme.white};
    -webkit-font-smoothing: antialiased;
  } 
`