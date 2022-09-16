import styled from 'styled-components';

export const TaskListContainer = styled.div`
  overflow-y: scroll;
  height: 73.5vh;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['gray-500']};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme['gray-300']};
  }

  @media (max-width: 768px) {
    height: 65vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
