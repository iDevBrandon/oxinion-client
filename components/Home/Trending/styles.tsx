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
  background: grey;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

export const SeeMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0 3rem;
`;

export const SeeMore = styled.div`
  display: flex;
  align-items: center;
  color: #091121;
  font-weight: bold;
`;
