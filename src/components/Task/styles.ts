import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 4.5rem;
  background-color: ${props => props.theme["gray-500"]};
  padding: 1rem;

  margin: 10px;
  border-left: 3px solid ${props => props.theme.pink};
  strong {
    padding: 0;
    display: flex;
    color: ${props => props.theme.pink};
    font-size: 0.875rem;
    font-weight: 500;
  }
  span {
    font-size: 0.85714rem;
    font-weight: 400;
  }

  button {
    border: none;
    background-color: ${props => props.theme["gray-500"]};

  }

  button :hover {
    cursor: pointer;
    filter: brightness(1.2)
  }

  button img {
    background-color: ${props => props.theme["gray-500"]};
    align-items: center;
  }
  
`