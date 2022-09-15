import styled from "styled-components";

export const MainHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 768px){
    margin-bottom: 15px;
    padding-left: 8px;
  }

  strong {
    font-weight: 700;
    font-size: 1.375rem;
    @media (max-width: 768px){
      text-transform: uppercase;
      font-weight: 400;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
    }
  }
`