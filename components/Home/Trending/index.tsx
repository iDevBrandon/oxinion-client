"use client";

import React from "react";
import {
  SeeMore,
  SeeMoreContainer,
  TrendingContainer,
  TrendingItem,
  TrendingList,
} from "./styles";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Trending = () => {
  return (
    <TrendingContainer>
      <h2 style={{ marginBottom: "16px" }}>Top Posts</h2>
      <TrendingList>
        <TrendingItem>
          <Image src="https://picsum.photos/200" alt="content" fill />
        </TrendingItem>
        <TrendingItem>
          <Image src="https://picsum.photos/201" alt="content" fill />
        </TrendingItem>
        <TrendingItem>
          <Image src="https://picsum.photos/202" alt="content" fill />
        </TrendingItem>
        <TrendingItem>
          <Image src="https://picsum.photos/203" alt="content" fill />
        </TrendingItem>
        <TrendingItem>
          <Image src="https://picsum.photos/204" alt="content" fill />
        </TrendingItem>
        <TrendingItem>
          <Image src="https://picsum.photos/205" alt="content" fill />
        </TrendingItem>
        <TrendingItem>
          <Image src="https://picsum.photos/206" alt="content" fill />
        </TrendingItem>
        <TrendingItem>
          <Image src="https://picsum.photos/207" alt="content" fill />
        </TrendingItem>
        <TrendingItem>
          <Image src="https://picsum.photos/208" alt="content" fill />
        </TrendingItem>
        <TrendingItem>
          <Image src="https://picsum.photos/209" alt="content" fill />
        </TrendingItem>
        <TrendingItem>
          <Image src="https://picsum.photos/210" alt="content" fill />
        </TrendingItem>
        <TrendingItem>
          <Image src="https://picsum.photos/211" alt="content" fill />
        </TrendingItem>
      </TrendingList>
      <SeeMoreContainer>
        <SeeMore>
          <FiChevronRight /> <Link href="/discover">See More</Link>
        </SeeMore>
      </SeeMoreContainer>
    </TrendingContainer>
  );
};

export default Trending;
