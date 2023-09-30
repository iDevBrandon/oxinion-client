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

export const FeaturedList = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FeaturedItem = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    /* width: 50%; */
  }
`;
