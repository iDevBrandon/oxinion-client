import styled from "styled-components";

export const TrendingContainer = styled.div`
  padding: 1rem;

  h2 {
    margin: 3rem 0 1rem;
  }

  @media (min-width: 768px) {
    padding: 0 10rem;
  }
`;

export const TrendingList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 100%;
  }
`;

export const TrendingItem = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
`;
