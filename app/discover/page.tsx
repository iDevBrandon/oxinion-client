"use client";

import React from "react";
import { DiscoverContainer, LocationHeader, MapSection } from "./styles";
import { RiMapPin2Line } from "react-icons/ri";
import ShowMap from "@/components/Common/ShowMap";
import { usePathname } from "next/navigation";
import { TrendingItem, TrendingList } from "@/components/Home/Trending/styles";
import Post from "@/components/Common/Post";

const Discover = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <DiscoverContainer>
      {pathname === "/discover" ? (
        <div></div>
      ) : (
        <MapSection>
          <ShowMap />
        </MapSection>
      )}

      <div>
        <LocationHeader>
          <div className="icon-container">
            <div className="header-icon">
              <RiMapPin2Line />
            </div>
          </div>
          <div className="header-text">
            <h4>Browsing in</h4>
            <h3>London, United Kingdom</h3>
          </div>
        </LocationHeader>
      </div>
      <div>
        <div>
          <h2>Featured stories</h2>
          <TrendingList>
            <TrendingItem>
              <Post />
            </TrendingItem>
            <TrendingItem>Item 2</TrendingItem>
            <TrendingItem>Item 3</TrendingItem>
            <TrendingItem>Item 4</TrendingItem>
            <TrendingItem>Item 5</TrendingItem>
            <TrendingItem>Item 6</TrendingItem>
          </TrendingList>
        </div>
      </div>
    </DiscoverContainer>
  );
};

export default Discover;
