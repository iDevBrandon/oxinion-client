"use client";

import React from "react";
import { HeaderGroup, HeaderNav, StyledLogo } from "./styles";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/oxinion_logo.png";

const Header = () => {
  return (
    <HeaderGroup>
      <HeaderNav>
        <Link href="/" className="logo">
          <StyledLogo>
            <Image src={logo} alt="OXINION_logo" width={40} height={40} />
          </StyledLogo>
        </Link>
      </HeaderNav>
    </HeaderGroup>
  );
};

export default Header;
