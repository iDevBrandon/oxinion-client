import styled from "styled-components";

interface IStyle {
  varient?: string;
  page?: any;
}

interface LoginButtonProps {
  primary?: boolean; // Define your prop types here
}

export const DefaultButton = styled.button<IStyle>`
  color: #ffffff;
  color: ${(props: any) => (props.varient === "primary" ? "fffff" : "#05164d")};
  //background-color: #05164d;
  background-color: ${(props: any) =>
    props.varient === "primary" ? "#05164d" : "ffffff"};
  text-align: "center";
  white-space: nowrap;
  border-radius: 4px;
  outline: none;
  border: none;
  text-decoration: none;
  list-style: none;
  font-weight: 500;
  margin-right: 1rem;
  box-shadow: ${(props: any) =>
    props.varient === "primary" && "inset 0px 0px 15px 3px #23395e"};
  border-radius: 17px;
  border: 1px solid #1f2f47;
  display: inline-block;
  cursor: pointer;
  font-family: Arial;
  font-size: 0.8rem;
  padding: 6px 13px;
  text-decoration: none;
  padding: 0.5rem 1rem;
  :hover {
    background: ${(props: any) =>
      props.varient === "secondary" &&
      " linear-gradient(to bottom, #415989 5%, #2e466e 100%);"};
    background-color: #ffffff;
    color: ${(props: any) =>
      props.varient === "secondary" ? "white" : "#05164d"};
  }
`;

export const HeaderGroup = styled.header<IStyle>`
  /* background: #f9f9f9; */
  /* background-color: ${({ theme }) => theme.colors.colorName1}; */

  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  height: 60px;
  /* position: block; */
  position: ${(props: any) => (props.page === "home" ? "fixed" : "inherit")};
  width: 100%;
  z-index: 99;
`;

export const HeaderNav = styled.nav`
  height: 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%),
    0 0 2px rgb(0 0 0 / 7%);
  /* box-shadow: 0px 5px 10px 0px rgba(0, 255, 255, 0.7); */
`;

export const StyledLogo = styled.div`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: block;
  padding-left: 1rem;
  /* position: absolute; */
  height: 40px;
  /* transform: translate(5%, 5%); */
  img {
    // width: 100%;
    height: 100%;
    display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const SubNav = styled.div`
  display: flex;
  padding-right: 1rem;
  height: 36px;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left,
  .right {
    display: flex;
  }
  .right {
    margin-right: 5px;
  }
  .left > * {
    display: flex;
    flex-direction: column;
    margin-right: 1.5rem;
  }
`;

export const UploadButton = styled.button`
  display: block;
  border-radius: 12px;
  border: 2px solid #002663;
  color: #002663;
  cursor: pointer;
  font-weight: 700;
  background: white;
  padding: 0.3rem;

  svg {
    font-size: 1.3rem;
  }
`;

export const UserIcon = styled.div`
  margin-left: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: black;
`;

export const ExtraMenu = styled.button`
  border: none;
  width: 20px;
  height: 20px;
  display: block;
  background: none;
  color: white;
  font-size: 1.3rem;
  margin-left: 1rem;
  display: none;
  @media (min-width: 768px) {
  }
`;

export const LoginButton = styled.button<LoginButtonProps>`
  a {
    border: 2px solid #002663;
    display: block;
    border-radius: 4px;
    color: ${(props) => (props.primary ? "white" : "black")};
    background-color: ${(props) => (props.primary ? "#002663" : "white")};
    min-height: 36px;
    padding: 6px 8px;
    font-weight: 700;
    font-size: 16px;
    margin-left: 16px;
    border-radius: 30px;
    text-decoration: none;
  }

  @media (min-width: 768px) {
  }
`;

export const MobileMenu = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileSlide = styled.ul`
  width: 100%;
  position: relative;
`;

export const NavMenu = styled.div`
  opacity: 1;
  width: 100%;
  background: #111820;
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 1;
  height: calc(100vh);
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
`;

export const NavLinks = styled.a`
  text-decoration: none;
  padding: 2rem;
  color: white;
  font-weight: bold;
`;
