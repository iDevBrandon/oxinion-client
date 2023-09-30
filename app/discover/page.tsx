"use client";

import React from "react";
import {
  DiscoverContainer,
  FeaturedContainer,
  FeedContainer,
  LatestFeedContainer,
  LocationHeader,
  MapSection,
  ContentsContainer,
  MainContainer,
  MainMap,
  MainPosts,
} from "./styles";
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
      <ContentsContainer>
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

        <MainContainer>
          <MainMap>
            {pathname === "discover" ? (
              <div>control map</div>
            ) : (
              <MapSection>
                <ShowMap />
              </MapSection>
            )}
          </MainMap>

          <MainPosts>
            <FeaturedContainer>
              <h2>Featured stories</h2>
              <Featured />
            </FeaturedContainer>
            <LatestFeedContainer>
              <h2>Latest Feed</h2>
              <FeedContainer>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
              </FeedContainer>
              Add infinite scrolling
            </LatestFeedContainer>
          </MainPosts>
        </MainContainer>
      </ContentsContainer>
    </DiscoverContainer>
  );
};

export default Discover;
