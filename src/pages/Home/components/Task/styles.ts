import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 4.5rem;
  background-color: ${props => props.theme["gray-500"]};
  padding: 1rem;
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
  margin: 10px;

  border-left: 3px solid ${props => props.theme.pink}
`