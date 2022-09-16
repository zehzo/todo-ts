import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-600']};
  display: flex;
  align-items: center;
  justify-content: end;
  height: 80px;
  padding: 0px 37px;
  border: 0.5px solid ${(props) => props.theme['gray-700']};
  border-radius: 4px 4px 0 0;

  img {
    align-items: center;
    height: 32px;
  }
`;
