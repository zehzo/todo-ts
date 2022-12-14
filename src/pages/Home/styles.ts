import styled from 'styled-components';

export const HomeContainer = styled.main`
  border-radius: 10px;
  background-color: ${(props) => props.theme['gray-600']};
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  }
`;

export const WrapperContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  color: ${(props) => props.theme.white};
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['gray-700']};
  padding: 30px;
  border-radius: 0 0 4px 0;
  @media (max-width: 768px) {
    background-color: ${(props) => props.theme['gray-700']};
    height: 100vh;
  }
`;
