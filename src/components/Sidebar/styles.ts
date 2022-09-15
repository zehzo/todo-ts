import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background: ${props => props.theme["gray-600"]};
  padding-top: 29px;
  padding-left: 30px;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 0 4px;

  footer {
  padding-bottom: 40px;
  gap: 1.2rem;
  display: flex;
  align-items: center;
  }
`

export const GreetingsContainer = styled.div`
  display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;

  img {
  display: block;
  background: var(--gray-600);
  height: 100px;
  align-self: flex-start;
  padding-bottom: 20px;
  }

  strong {
  display: block;
  padding-top: 20px;
}
`

export const ContentContainer = styled.div` 
  /* padding-left: 10px; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1.125rem;
  justify-content: space-between;

  span {
  font-size: 0.875rem;
}
`