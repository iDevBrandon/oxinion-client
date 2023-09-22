import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #091121;
  color: white;
  margin: 0 auto;
  width: 100%;
  /* max-width: 1110px; */

  .row {
    display: flex;
    flex-wrap: wrap;
  }
  ul {
    list-style: none;
  }
  .footer {
    background-color: #24262b;
    padding: 70px 0;
  }
  .footer-col {
    width: 25%;
    padding: 0 15px;

    ul {
      padding: 0;
    }
  }

  .footer-col h4 {
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
  }
  .footer-col h4::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #e91e63;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }
  .footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
  }
  .footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
  }
  .footer-col ul li a:hover {
    color: #ffffff;
    padding-left: 8px;
  }

  .social-links {
    display: flex;
  }

  .footer-col .social-links a {
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
  }
  .footer-col .social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
  }

  .footer-col .social-links i {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /*responsive*/
  @media (max-width: 767px) {
    .footer-col {
      width: 50%;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 574px) {
    .footer-col {
      width: 100%;
    }
  }
`;

export const Newsletter = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #6c707a;
`;

export const SeconaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 5%;
  margin-top: 0;
  height: auto;
  color: #fff;
  font-size: 12px;

  small {
    color: #9ba2a6;
    display: inline-block;
    font-size: 12px;
    margin-top: 16px;
    text-align: center;
    width: 100%;
  }
`;
