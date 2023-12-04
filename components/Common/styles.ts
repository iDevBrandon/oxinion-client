import styled from "styled-components";

export const MapOutter = styled.div`
  height: 25vh;

  @media (min-width: 768px) {
    /* background: red; */
    height: 50vh;
    overflow: auto;
    position: sticky;
    top: 0;
  }
`;

export const AuthFormContainer = styled.div`
  border: 1px solid #d9dce0;
  border-radius: 5px;
  height: 50vh;
  margin: 2rem 1rem;
  display: block;
  padding: 2rem;

  @media (min-width: 768px) {
    max-width: 450px;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 8rem auto;
  }
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
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 65px;
  transform: translateX(-70%);
  background-color: #242526;
  border-radius: 8px;
  padding: 1.5rem;
  overflow: hidden;
  z-index: 10000;

  @media (min-width: 767px) {
    width: 200px;
    right: 1rem;
    transform: none;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  color: white;
  border-radius: 8px;
  font-size: 0.8rem;

  span {
    font-size: 1rem;
  }

  &:hover {
    background-color: #525357;
  }

  /* @media (min-width: 767px) {
    font-size: 2rem;
  } */
`;

export const TransparentButton = styled.button`
  align-items: center;
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  min-width: 64px;
`;

export const StyledButton = styled.button`
  align-items: center;
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  min-width: 64px;
  span {
    background-color: rgb(5, 6, 45);
    padding: 10px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }

  @media (min-width: 768px) {
    & {
      font-size: 24px;
    }
  }
`;

export const DynamicIsland = styled.div``;

export const ARButton = styled.div``;
