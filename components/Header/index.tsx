"use client";

import React, { useEffect, useState } from "react";
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
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const { data: me } = useMyInfoQuery();

  return (
    <HeaderGroup>
      <HeaderNav>
        <Link href="/" className="logo">
          <StyledLogo>
            <Image src={logo} alt="OXINION_logo" width={40} height={40} />
          </StyledLogo>
        </Link>

        <SubNav>
          {!(me && me.id) ? (
            <>
              <UploadButton>Upload</UploadButton>
              <Link href="/profile">
                <UserIcon>
                  <FaUserAstronaut />
                </UserIcon>
              </Link>
            </>
          ) : (
            <>
              <LoginButton >
                <Link href="/signup">Sign Up</Link>
              </LoginButton>
              <LoginButton primary>
                <Link href="/login">Log In</Link>
              </LoginButton>
            </>
          )}

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
