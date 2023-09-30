"use client";

import Image from "next/image";
import React from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { PostDetails, PostImage, PostProp, PostWrapper, ProfileWrapper,ProfileImage } from "./styles";

const index = () => {
  return (
    <PostWrapper>
    <PostImage>
      <Image src="https://picsum.photos/203"
          alt="content"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          objectFit="cover"/>
    </PostImage>
    <PostDetails>
      <ProfileWrapper>
       <ProfileImage>
       <Image src="https://picsum.photos/204"
          alt="profile"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          objectFit="cover"/>
       </ProfileImage>

        <div>
          <b>iDevBrandon</b>
          <small>1hr ago</small>
        </div>
      </ProfileWrapper>
      <PostProp>
        <div>472 likes</div>
        <div style={{margin: '0 0.5rem'}}>
          <HiOutlineHeart />
        </div>
        <div>
          <MdOutlineMoreHoriz />
        </div>
      </PostProp>
    </PostDetails>
  </PostWrapper>
  );
};

export default index;
