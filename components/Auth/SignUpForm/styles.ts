import theme from "@/styles/theme";
import styled from "styled-components";

export const AuthFormContainer = styled.div`
  border: 1px solid #d9dce0;
  margin: 0 auto;
  border-radius: 5px;
  height: 50vh;
  padding: 2rem;
  @media (min-width: 768px) {
    max-width: 450px;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 8rem auto;
    display: block;
    padding: 2rem;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
`;

export const CompleteButton = styled.button`
  cursor: pointer;
  height: 44px;
  width: 100%;
  background-color: ${theme.colors.black};
  color: rgb(255, 255, 255);
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;

  a > button {
    text-decoration-line: none;
  }
`;
