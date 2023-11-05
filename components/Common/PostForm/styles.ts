import styled from "styled-components";

export const TransparentButton = styled.button`
  background-color: transparent;
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
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
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
      min-width: 196px;
    }
  }
`;

// Form
export const FormFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

// Location
export const Location = styled.div``;

// Images

// Details
