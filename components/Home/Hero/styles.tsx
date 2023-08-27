import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  display: block;
`;

export const SearchTabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  height: 95vh;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2311&q=80);

  @media (min-width: 768px) {
    position: block;
    display: flex;
    flex-direction: column;
    padding-bottom: 7rem;
    height: 90vh;
    padding-top: 13rem;
  }
`;

export const HeroText = styled.div`
  top: 50%;
  left: 30%;
  bottom: 0;
  z-index: 1;
  transform: rotate(-2deg);
  height: 16px;
`;

export const SubHeader = styled.div`
  width: 100%;
  margin: auto 1rem;
  padding: 3rem;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
      justify-content: space-evenly;
    }

    li {
      width: 25%;
      display: flex;
      color: white;
      align-items: center;
      font-weight: bold;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 25px;
      padding: 3px;
      margin: 2px;
      text-align: center;
      background: #6460568f;
      justify-content: center;

      a {
        text-decoration: none;
        color: white;
      }

      @media (min-width: 600px) {
        /* width: 15%; */
        background: #00000059;
        color: white;
      }

      svg {
        /* width: 15%; */
        font-size: 1rem;
      }

      p {
        margin: 0;
      }

      &:hover {
        color: white;
        outline: none;
        opacity: 0.8;
        border-radius: 15px;
      }
    }
  }
  @media (min-width: 767px) {
    width: 50%;
    justify-content: space-around;
  }

  /* @media screen and (min-width:767px) and (max-width:1023px){
    background: blue;
  } */
`;
