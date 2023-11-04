import styled from "styled-components";

export const MapOutter = styled.div`
  height: 25vh;

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 65px;
  /* transform: translateX(-70%); */
  background-color: #242526;
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  width: 50%;
  right: 3px;

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
`;
