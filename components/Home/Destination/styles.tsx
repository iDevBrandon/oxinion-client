import styled from "styled-components";

export const DestinationList = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #131722; */
  background-color: rgb(9, 17, 33);
  .DestinationHeader {
    background-color: rgb(9, 17, 33);
    color: #cfcdda;
    line-height: 1.1;
    margin-bottom: 1rem;
    margin: 0 3%;
    padding: 2rem 0;
  }
  .DestinationContents {
    background-color: rgb(9, 17, 33);
    display: flex;
    height: 350px;
    .slick-list {
      display: flex;
      flex-direction: row;
      overflow-y: auto;
    }
  }
`;

export const SDestination = styled.div`
  margin-left: 2.66667vw;
  height: 300px;
  min-width: 300px;
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .image {
    /* clip-path: circle(); */
    width: 100%;
    height: 100%;
    img {
      border-radius: 2rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .name {
    color: #808080;
    text-align: center;
    text-decoration: none;
  }
`;
