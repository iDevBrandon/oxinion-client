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
import { useRouter } from "next/navigation";
import { loadMyInfoAPI } from "@/apis/auth";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import Dropdown from "../Common/Dropdown";
import PostForm from "../Common/PostForm";

const Header = ({ me }: any) => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { data: user, error } = useMyInfoQuery();
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const uploadHandler = (e: any) => {
    setUploadModalOpen(true);
  };

  const handleClose = () => {
    setUploadModalOpen(false);
  };

  return (
    <HeaderGroup>
      <HeaderNav>
        <Link href="/" className="logo">
          <StyledLogo>
            <Image src={logo} alt="OXINION_logo" width={40} height={40} />
          </StyledLogo>
        </Link>

        <SubNav>
          {user ? (
            <>
              <UploadButton onClick={uploadHandler}>Upload</UploadButton>
              <UserIcon>
                <FaUserAstronaut
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                {dropdownOpen && <Dropdown />}
              </UserIcon>
            </>
          ) : (
            <>
              <LoginButton>
                <Link href="/signup">Sign Up</Link>
              </LoginButton>
              <LoginButton>
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
      {uploadModalOpen && (
        <PostForm open={uploadModalOpen} handleClose={handleClose} />
      )}
    </HeaderGroup>
  );
};

export default Header;
