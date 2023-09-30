"use client";

import Image from "next/image";
import React from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { MdOutlineMoreHoriz } from "react-icons/md";

const index = () => {
  return (
    <div className="PostWrapper">
      <div style={{ width: "100%", height: "500px", position: "relative" }}>
        <Image
          src="https://source.unsplash.com/random/300×301"
          alt="post_image"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="PostWriter">
        <div style={{ width: "100%", height: "30px", position: "relative" }}>
          <Image
            src="https://source.unsplash.com/random/300×300"
            alt="profile"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div>
          <b>iDevBrandon</b>
          <small>1hr ago</small>
        </div>
        <div className="PostProp">
          <div>472 likes</div>
          <div>
            <HiOutlineHeart />
          </div>
          <div>
            <MdOutlineMoreHoriz />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
