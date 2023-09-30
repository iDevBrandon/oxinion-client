"use client";

import React from "react";
import { DiscoverContainer, LocationHeader, MapSection } from "./styles";
import { RiMapPin2Line } from "react-icons/ri";
import ShowMap from "@/components/Common/ShowMap";
import { usePathname } from "next/navigation";
import { TrendingItem, TrendingList } from "@/components/Home/Trending/styles";
import Post from "@/components/Common/Post";
import Featured from "@/components/Common/Featured";

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
          <Featured />
        </div>
        <div>
          <h2>Latest Feed</h2>
          <div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          Add infinite scrolling
        </div>
      </div>
    </DiscoverContainer>
  );
};

export default Discover;
