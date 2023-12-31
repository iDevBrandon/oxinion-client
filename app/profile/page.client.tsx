"use client";

import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import Image from "next/image";
import React from "react";
import { ProfileCard } from "./styles";

const ProfilePage = () => {
  const { data: me } = useMyInfoQuery();

  return (
    <div>
      <Image
        src="https://picsum.photos/200"
        alt="profile"
        width="200"
        height="200"
      />
      <h2>{me?.username}</h2>

      <ProfileCard>
        <li>
          <small>Post</small>
          <br />
          <small>{me?.posts.length}</small>
        </li>
        <li>
          <small>Followers</small>
          <br />
          <small>{me?.followers.length}</small>{" "}
        </li>
        <li>
          <small>Followings</small>
          <br />
          <small>{me?.followings?.length}</small>{" "}
        </li>
      </ProfileCard>
    </div>
  );
};

export default ProfilePage;
