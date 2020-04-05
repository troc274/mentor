import styled from "styled-components";

export const Row = styled.div`
  margin: 0 -10px;
  display: flex;
  flex-wrap: wrap;
`;

export const Grid = styled.div`
  box-sizing: border-box;
  padding: 0 10px;
  flex: 0 0 100%;
  max-width: 100%;
  @media (min-width: 576px){
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 1200px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;
