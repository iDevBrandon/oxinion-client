import styled from "styled-components";

export const LocationHeader = styled.header`
  display: flex;
  padding: 1em;
  font-size: 17px;
  margin-bottom: 44px;
  margin-top: 10px;
  align-items: center;
  /* 
  justify-content: center; */
  .icon-container {
    padding: 3rem;
    border: 2px solid black;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: flex;
    aspect-ratio: auto;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
  }
  .header-icon {
    svg {
      font-size: 2rem;
    }
  }
  .header-text {
    h3,
    h4 {
      margin: 0;
    }
  }
`;

export const DiscoverContainer = styled.div``;

export const MapSection = styled.div`
  width: 100%;
`;

export const FeaturedContainer = styled.div`
  @media (min-width: 768px) {
    padding: 0 10rem;
  }
`;

export const LatestFeedContainer = styled.div`
  @media (min-width: 768px) {
    padding: 0 10rem;
  }
`;

export const FeedContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
  }
`;
