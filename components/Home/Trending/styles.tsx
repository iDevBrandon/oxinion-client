import styled from "styled-components";

export const TrendingList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
`;

export const TrendingItem = styled.div`
  background: grey;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

export const SeeMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 1rem;
`;

export const SeeMore = styled.div`
  display: flex;
  align-items: center;
  color: rgba(2, 122, 151, 1);
  font-weight: bold;
`;
