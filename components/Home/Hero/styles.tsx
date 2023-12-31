import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  display: block;
`;

export const SearchTabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2311&q=80);
  padding-bottom: 13rem;
  @media (min-width: 768px) {
    position: block;
    display: flex;
    flex-direction: column;
    padding-bottom: 7rem;
  }
`;

export const SearchTabOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const SearchTab = styled.div`
  border-radius: 50px;
  padding: 1rem;
  background: #00123c;
  border: 1px solid rgb(221, 221, 221);

  @media (min-width: 768px) {
    width: 100%;
    padding: 0.5rem;
    display: flex;
  }
`;

export const SearchInput = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 25px;
  /* border: none; */
  margin-bottom: 3px;
  border: 2px solid #f9ca48;
  outline: none;
  padding: 1rem;

  &:first-child {
    border-bottom-left-radius: unset;
  }

  &:last-child {
    border-top-left-radius: unset;
  }

  @media (min-width: 768px) {
    &:first-child {
      border-radius: 25px;
      border-top-right-radius: unset;
      border-bottom-right-radius: unset;
      margin-right: 2px;
    }

    &:last-child {
      border-left: 1px solid #c7c7c7;
      border-top-left-radius: unset;
      border-bottom-left-radius: unset;
    }
  }
`;

export const SearchButton = styled.button`
  display: block;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 1px solid #cfdcec;
  overflow: hidden;
  box-shadow: 0 0 3px gray;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: aliceblue;
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
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
    margin-top: 5px;
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

      @media (min-width: 768px) {
        width: 20%;
        background: #00000059;
        color: white;
      }

      svg {
        display: none;

        @media (min-width: 768px) {
          display: block;
        }
      }

      p {
        width: 85%;
        margin: 0;
      }

      &:hover {
        color: white;
        outline: none;
        opacity: 0.8;
        border-radius: 15px;
      }

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
  @media (min-width: 767px) {
    width: 70%;
    justify-content: space-around;
  }

  /* @media screen and (min-width:767px) and (max-width:1023px){
    background: blue;
  } */
`;
