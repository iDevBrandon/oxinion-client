"use client";

import React, { useState } from "react";
import {
  ExtraMenu,
  HeaderGroup,
  HeaderNav,
  LoginButton,
  StyledLogo,
  SubNav,
  UploadButton,
  UserIcon,
} from "./styles";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/oxinion_logo.png";
import { FaUserAstronaut } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <HeaderGroup>
      <HeaderNav>
        <Link href="/" className="logo">
          <StyledLogo>
            <Image src={logo} alt="OXINION_logo" width={40} height={40} />
          </StyledLogo>
        </Link>

        <SubNav>
          {isLoggedIn ? (
            <UploadButton>Upload</UploadButton>
          ) : (
            <LoginButton>
              <Link href="/signup">Sign Up</Link>
            </LoginButton>
          )}

          <Link href="/profile">
            <UserIcon>
              <FaUserAstronaut />
            </UserIcon>
          </Link>

          <ExtraMenu>
            <HiOutlineDotsVertical />
          </ExtraMenu>
          {/* <FaUser /> */}
        </SubNav>
      </HeaderNav>
    </HeaderGroup>
  );
};

export default Header;
