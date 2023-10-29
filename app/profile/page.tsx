"use client";
import React from "react";
import { ProfileCard } from "./styles";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div>
      <Image src="https://picsum.photos/200" alt="profile" width='200' height='200' />
      <h2>iDevBrandon</h2>

      <ProfileCard>
        <li>
          <small>Post</small>
          <br />
          <small>1</small>
        </li>
        <li>
          <small>Followers</small>
          <br />
          <small>12</small>
        </li>
        <li>
          <small>Followings</small>
          <br />
          <small>31</small>
        </li>
      </ProfileCard>
    </div>
  );
};

export default ProfilePage;
