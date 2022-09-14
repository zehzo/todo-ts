import styled from "styled-components";

export const TaskListContainer = styled.div`
  padding: 0 30px 30px 30px;
  overflow-y: scroll;
  height: 32rem;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`