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

export const DiscoverContainer = styled.div`
  @media (min-width: 768px) {
    position: relative;
  }
`;

export const MainContainer = styled.main`
  @media (min-width: 768px) {
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

export const MainMap = styled.div`
  order: 2; /* Reversed order for larger screens */

  @media (min-width: 768px) {
    /* background: red; */
    height: 100vh;
    overflow: auto;
    position: sticky;
    top: 0;
  }
`;

export const MainPosts = styled.div`
  order: 1; /* Reversed order for larger screens */
`;

export const MapSection = styled.div`
  /* width: 100%;

  @media (min-width: 768px) {
    display: inline-block;
    position: relative;
  } */
`;

export const ContentsContainer = styled.div`
  @media (min-width: 768px) {
  }
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

export const MapController = styled.div`
  width: 100%;
  display: none;
  background: grey;
  @media (min-width: 768px) {
    
    order: 2;
    display: inline-block;
    position: relative;
  }
`;