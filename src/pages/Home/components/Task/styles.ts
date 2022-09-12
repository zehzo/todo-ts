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
  }
`