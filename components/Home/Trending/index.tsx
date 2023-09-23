"use client";

import React from "react";
import {
  SeeMore,
  SeeMoreContainer,
  TrendingItem,
  TrendingList,
} from "./styles";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const Trending = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ marginBottom: "16px" }}>Top Posts</h2>
      <TrendingList>
        <TrendingItem>Item 1</TrendingItem>
        <TrendingItem>Item 2</TrendingItem>
        <TrendingItem>Item 3</TrendingItem>
        <TrendingItem>Item 4</TrendingItem>
        <TrendingItem>Item 5</TrendingItem>
        <TrendingItem>Item 6</TrendingItem>
      </TrendingList>
      <SeeMoreContainer>
        <SeeMore>
          <FiChevronDown />
          <Link href="/explore">See More</Link>
        </SeeMore>
      </SeeMoreContainer>
    </div>
  );
};

export default Trending;
