import styled from "styled-components";

export const TrendingContainer = styled.div`
  padding: 1rem;
  border-top: 1px solid #ebebeb;
  margin: auto 0;
  border-bottom: 1px solid #ebebeb;

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

  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }

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
  height: 50px;
  line-height: 49px;
  padding: 0 18px;
  text-align: center;
  vertical-align: top;
  border-radius: 5px;
  border: 1px solid #593cfb;

  color: #002663;
  border: solid 2px #002663;
  font-size: 18px;
  margin: 3rem 0;
  transition: 0.5s border, 0.5s #593cfb;

  a {
    text-decoration: none;
    color: black;
  }
`;
