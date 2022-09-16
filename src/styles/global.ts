import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  
  margin: 0;
  padding:0;
  box-sizing: border-box;

  }

  body {
    background: ${(props) => props.theme['gray-500']};
    -webkit-font-smoothing: antialiased;
    
  
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    /* padding: 10vh 0vh; */
    overflow: hidden;
    
  } 
`;
