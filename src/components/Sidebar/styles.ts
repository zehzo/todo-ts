import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background: ${props => props.theme["gray-600"]};
  padding: 30px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 0 4px;
  @media (max-width: 768px){
    padding: 0px;
    height: 100%;
  }

  footer {
  padding-bottom: 40px;
  gap: 1.2rem;
  display: flex;
  align-items: center;
  @media (max-width: 768px){
    padding-bottom: 0px;
    display: none;
  }
  }
`

export const GreetingsContainer = styled.div`
  display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  @media (max-width: 768px){
    background-color: ${props => props.theme["gray-700"]};
    padding: 36px 0px 0px 36px;
  }

  img {
  display: block;
  background: var(--gray-600);
  height: 100px;
  align-self: flex-start;
  padding-bottom: 20px;
  @media (max-width: 768px){
    display: none;
  }
  }

  strong {
  display: block;
  padding-top: 20px;
  @media (max-width: 768px){
    padding-top: 0px;
  }
  }
`

export const ContentContainer = styled.div` 
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1.125rem;
  justify-content: space-between;

  span {
  font-size: 0.875rem;
}
`