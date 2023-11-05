"use client";

import React from "react";
import { FooterContainer, Newsletter, SeconaryWrapper } from "./styles";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import Image from "next/image";
import OXINIONLogo from "../../public/images/full_oxinion_logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <Newsletter>newsletter</Newsletter>
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>For business</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/oxinion">
                <i className="fab fa-facebook-f">
                  <FiFacebook />
                </i>
              </a>
              <a href="https://www.youtube.com/oxinion">
                <i className="fab fa-youtube">
                  <FiYoutube />
                </i>
              </a>
              <a href="https://www.instagram.com/oxinion/">
                <i className="fab fa-instagram">
                  <FiInstagram />
                </i>
              </a>
              <a href="https://www.linkedin.com/company/oxinion/">
                <i className="fab fa-linkedin-in">
                  <FiLinkedin />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <SeconaryWrapper>
        <div
          style={{
            position: "relative",
            width: "200px",
            paddingBottom: "100px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Image
            src={OXINIONLogo}
            alt="oxinion"
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <small className="footer__copyright-text">
          Copyright 2023 OXINION | All rights reserved.
        </small>
      </SeconaryWrapper>
    </FooterContainer>
  );
};

export default Footer;
